package region.us.integration.autodesk;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lsfusion.base.col.MapFact;
import lsfusion.base.col.SetFact;
import lsfusion.base.col.interfaces.immutable.ImMap;
import lsfusion.base.col.interfaces.immutable.ImOrderMap;
import lsfusion.base.col.interfaces.immutable.ImOrderSet;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.data.value.DataObject;
import lsfusion.server.language.ScriptingErrorLog;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.classes.data.integral.IntegerClass;
import lsfusion.server.language.property.LP;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Parses Autodesk Properties JSON structure:
 * {
 *   "data": {
 *     "type": "properties",
 *     "collection": [
 *       {
 *         "objectid": <int>,
 *         "name": <string>,
 *         "externalId": <string>,
 *         "properties": {
 *           "Category A": { "Prop1": "Value", ... },
 *           "Category B": { ... }
 *         }
 *       }, ...
 *     ]
 *   }
 * }
 *
 * Flattens into LOCAL properties (keyed by synthetic INTEGER row id):
 *   propObjectId[INTEGER]   = INTEGER
 *   propExternalId[INTEGER] = STRING
 *   propObjectName[INTEGER] = STRING
 *   propCategory[INTEGER]   = STRING
 *   propName[INTEGER]       = STRING
 *   propValue[INTEGER]      = STRING
 */
public class AutodeskPropertiesImportAction extends InternalAction {

    public AutodeskPropertiesImportAction(ScriptingLogicsModule LM, ValueClass... classes) {
        super(LM, classes);
    }

    @Override
    protected void executeInternal(ExecutionContext<ClassPropertyInterface> executionContext) throws SQLException, SQLHandledException {
        String json = (String) getParam(0, executionContext);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode root;
        try {
            root = mapper.readTree(json == null ? "" : json);
        } catch (IOException e) {
            throw new RuntimeException("Ошибка при разборе JSON", e);
        }

        try {
            JsonNode data = root.path("data");
            JsonNode collection = data.path("collection");
            if (collection.isArray()) {
                RowId rowId = new RowId();
                Map<Integer, PropRow> rows = new LinkedHashMap<>();
                for (int i = 0; i < collection.size(); i++) {
                    JsonNode item = collection.get(i);

                    Integer objectId = item.hasNonNull("objectid") ? item.get("objectid").asInt() : null;
                    String objectName = item.hasNonNull("name") ? item.get("name").asText() : null;
                    String externalId = item.hasNonNull("externalId") ? item.get("externalId").asText() : null;

                    // Keep linkage per object if required elsewhere
                    DataObject key = new DataObject(i, IntegerClass.instance);
                    findProperty("objectId[INTEGER]").change(objectId, executionContext, key);
                    findProperty("externalId[INTEGER]").change(externalId, executionContext, key);
                    // objectName is not required to be batch-updated; store if needed later
                    // findProperty("propObjectName[INTEGER]").change(objectName, executionContext, key);

                    JsonNode props = item.path("properties");
                    if (props != null && props.isObject()) {
                        // iterate categories
                        props.fields().forEachRemaining(catEntry -> {
                            String category = catEntry.getKey();
                            JsonNode catNode = catEntry.getValue();
                            if (catNode != null && catNode.isObject()) {
                                catNode.fields().forEachRemaining(propEntry -> {
                                    String pName = propEntry.getKey();
                                    JsonNode valueNode = propEntry.getValue();
                                    String pVal = toScalarString(valueNode);
                                    int rid = rowId.next();
                                    rows.put(rid, new PropRow(objectId, category, pName, pVal));
                                });
                            } else {
                                // category is not an object: emit as a single property with empty prop name
                                String pVal = toScalarString(catNode);
                                int rid = rowId.next();
                                rows.put(rid, new PropRow(objectId, "", category, pVal));
                            }
                        });
                    }
                }

                ImOrderSet<LP> props = SetFact.fromJavaOrderSet(Arrays.asList(findProperties(
                        "propObjectId[INTEGER]",
                        "propCategory[INTEGER]",
                        "propName[INTEGER]",
                        "propValue[INTEGER]"
                )));

                ImMap<Integer, PropRow> rowsMap = MapFact.fromJavaRevMap(rows);

                LP.change(executionContext, props, rowsMap, (keyRowId, row, lp) -> {
                    String pname = lp.property.getName();
                    switch (pname) {
                        case "propObjectId":
                            return row.objectId;
                        case "propCategory":
                            return row.category;
                        case "propName":
                            return row.name;
                        case "propValue":
                            return row.value;
                        default:
                            return null;
                    }
                });
            }
        } catch (ScriptingErrorLog.SemanticErrorException | SQLException | SQLHandledException e) {
            throw new RuntimeException(e);
        }
    }

    private static String toScalarString(JsonNode node) {
        if (node == null || node.isNull()) return null;
        if (node.isTextual()) return node.asText();
        if (node.isNumber()) return node.numberValue().toString();
        if (node.isBoolean()) return Boolean.toString(node.asBoolean());
        // For arrays/objects, stringify as JSON
        return node.toString();
    }

    private static class PropRow {
        final Integer objectId;
        final String category;
        final String name;
        final String value;
        PropRow(Integer objectId, String category, String name, String value) {
            this.objectId = objectId;
            this.category = category;
            this.name = name;
            this.value = value;
        }
    }

    private static class RowId {
        private int id = 0;
        public int next() { return id++; }
    }
}
