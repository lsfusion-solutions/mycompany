package region.us.integration.autodesk;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.data.value.DataObject;
import lsfusion.server.language.ScriptingErrorLog;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.classes.data.integral.IntegerClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;

import java.io.IOException;
import java.sql.SQLException;

/**
 * Parses nested Autodesk-like JSON with structure:
 * {
 *   "data": {
 *     "type": "objects",
 *     "objects": [ { "objectid": <int>, "name": <string>, "objects": [ ... ] }, ... ]
 *   }
 * }
 * and flattens it into local properties:
 *   objectName[INTEGER] = STRING
 *   objectId[INTEGER]    = INTEGER (source objectid)
 *   parentId[INTEGER]    = INTEGER (parent's objectid, null for roots)
 */
public class AutodeskObjectTreeImportAction extends InternalAction {

    public AutodeskObjectTreeImportAction(ScriptingLogicsModule LM, ValueClass... classes) {
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
            JsonNode objects = data.path("objects");
            if (objects.isArray()) {
                Counter counter = new Counter();
                for (JsonNode obj : objects) {
                    traverseObject(obj, null, counter, executionContext);
                }
            }
        } catch (ScriptingErrorLog.SemanticErrorException e) {
            throw new RuntimeException("Ошибка при обработке JSON", e);
        }
    }

    private void traverseObject(JsonNode node,
                                Integer parentObjectId,
                                Counter counter,
                                ExecutionContext<ClassPropertyInterface> executionContext)
            throws ScriptingErrorLog.SemanticErrorException, SQLException, SQLHandledException {

        if (node == null || node.isNull()) return;

        Integer objectId = node.hasNonNull("objectid") ? node.get("objectid").asInt() : null;
        String name = node.hasNonNull("name") ? node.get("name").asText() : null;

        // emit current node into local table using synthetic INTEGER key
        DataObject rowKey = new DataObject(counter.next(), IntegerClass.instance);
        findProperty("objectId[INTEGER]").change(objectId, executionContext, rowKey);

        findProperty("objectName[INTEGER]").change(name, executionContext, rowKey);
        findProperty("parentId[INTEGER]").change(parentObjectId, executionContext, rowKey);

        // children
        JsonNode children = node.path("objects");
        if (children.isArray()) {
            for (JsonNode child : children) {
                traverseObject(child, objectId, counter, executionContext);
            }
        }
    }

    private static class Counter {
        private int id = 0;
        public int next() { return id++; }
    }
}
