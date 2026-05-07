function autodeskViewer() {
    return {
        render: function (element) {
            // let viewer = document.createElement("div");
            // element.viewer = viewer;
            // element.appendChild(viewer);
        },
        update: function (element, controller, value) {
            if (value !== null) {
                if (element.accessToken !== value.accessToken) {
                    element.accessToken = value.accessToken;
                    element.expiresIn = value.expiresIn;

                    if (element.onTokenReady)
                        element.onTokenReady(value.accessToken, value.expiresIn);
                }

                if (!element.initialized) {
                    let options = {
                        env: 'AutodeskProduction',
                        api: 'derivativeV2',  // for models uploaded to EMEA change this option to 'derivativeV2_EU'
                        getAccessToken: function (onTokenReady) {
                            if (value.expiresIn > 60)
                                onTokenReady(value.accessToken, value.expiresIn);
                            else
                                controller.changeValue({ action : "getAccessToken" });
                            element.onTokenReady = onTokenReady;
                        }
                    }

                    element.onDocumentLoadSuccess = function (viewerDocument) {
                        // Choose the default viewable - most likely a 3D model, rather than a 2D sheet.
                        var defaultModel = viewerDocument.getRoot().getDefaultGeometry();
                        element.viewer.loadDocumentNode(viewerDocument, defaultModel).then(
                            (model) => {
                                model.getExternalIdMapping((data) => {
                                    element.extToDb = data;

                                    element.dbToExt = {};
                                    for (const [extId, dbId] of Object.entries(data)) {
                                        element.dbToExt[dbId] = extId;     // dbId -> externalId
                                    }
                                })
                            }
                        )
                    }

                    element.onDocumentLoadFailure = function () {
                        console.error('Failed fetching model');
                    }

                    Autodesk.Viewing.Initializer(options, function () {
                        element.viewer = new Autodesk.Viewing.GuiViewer3D(element);
                        element.viewer.start();

                        element.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, function () {
                            if (element.dbToExt) {
                                const dbIds = element.viewer.getSelection();
                                if (JSON.stringify(dbIds) !== element.selected && !element.changeSelect) {
                                    controller.changeValue({
                                        action: "selectionChanged",
                                        selection: dbIds.map(dbId => element.dbToExt[dbId])
                                    })
                                    element.selected = JSON.stringify(dbIds);
                                }
                            }
                        });

                        if (value.urn) {
                            Autodesk.Viewing.Document.load(value.urn, element.onDocumentLoadSuccess, element.onDocumentLoadFailure);
                            element.urn = value.urn;
                        }
                    });

                    element.initialized = true;
                }

                if (element.viewer && value.urn && value.urn !== element.urn) {
                    Autodesk.Viewing.Document.load(value.urn, element.onDocumentLoadSuccess, element.onDocumentLoadFailure);
                    element.urn = value.urn;
                }

                if (element.viewer && element.extToDb) {

                    if (value.selected && value.selected.length > 0) {
                        const dbIds = value.selected.map(extId => element.extToDb[extId]).filter(extId => extId != null);

                        if (JSON.stringify(dbIds) !== element.selected) {
                            element.selected = JSON.stringify(dbIds);

                            element.changeSelect = true;
                            element.viewer.select(dbIds);
                            element.changeSelect = false;
                            if (dbIds.length > 0) {
                                element.viewer.fitToView(dbIds);
                            }
                        }
                    }
                    if (value.isolated && value.isolated.length > 0) {
                        const dbIds = value.isolated.map(extId => element.extToDb[extId]).filter(extId => extId != null);

                        if (JSON.stringify(dbIds) !== element.isolated) {
                            element.isolated = JSON.stringify(dbIds);

                            element.changeSelect = true;
                            element.viewer.isolate(dbIds);
                            element.changeSelect = false;
                            if (dbIds.length > 0) {
                                element.viewer.fitToView(dbIds);
                            }
                        }
                    }
                }
            }
        }
    }
}