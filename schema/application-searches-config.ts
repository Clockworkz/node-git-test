let applicationSearchesConfig = {
    "schema": {
        "title": "applicationSearchesConfig",
        "type": "object",
        "properties": {
            "type": {
                "type": "string",
                "title": "type"
            },
            "index": {
                "type": "string",
                "title": "index"
            },
            "documentType": {
                "type": "string",
                "title": "documentType"
            },
            "useAggregations": {
                "type": "boolean",
                "title": "useAggregations"
            },
            "hasFocusSubscription": {
                "type": "boolean",
                "title": "hasFocusSubscription"
            },
            "checkEnabledStates": {
                "type": "boolean",
                "title": "checkEnabledStates"
            },
            "useDeckConstrains": {
                "type": "boolean",
                "title": "useDeckConstrains"
            },
            "filters": {
                "type": "array",
                "title": "filters",
                "items": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string",
                            "title": "type"
                        },
                        "name": {
                            "type": "string",
                            "title": "name"
                        },
                        "tagName": {
                            "type": "string",
                            "title": "tagName"
                        },
                        "icon": {
                            "type": "string",
                            "title": "icon"
                        },
                        "dataField": {
                            "type": "string",
                            "title": "dataField"
                        },
                        "nonAnalysedFieldSuffix": {
                            "type": "string",
                            "title": "nonAnalysedFieldSuffix"
                        },
                        "nested": {
                            "type": "boolean",
                            "title": "nested"
                        },
                        "nestedFieldPath": {
                            "type": "string",
                            "title": "nestedFieldPath"
                        },
                        "sectionKey": {
                            "type": "string",
                            "title": "sectionKey"
                        }
                    }
                }
            },
            "returnedFields": {
                "type": "array",
                "title": "returnedFields",
                "items": {
                    "type": "string"
                }
            },
            "sorting": {
                "type": "array",
                "title": "sorting",
                "items": {
                    "type": "object",
                    "properties": {
                        "dataField": {
                            "type": "string",
                            "title": "dataField"
                        },
                        "order": {
                            "type": "string",
                            "title": "order"
                        }
                    }
                }
            }
        }
    },
    "formData": {
        "type": "bundle",
        "index": "index",
        "documentType": "bundles",
        "useAggregations": true,
        "hasFocusSubscription": true,
        "checkEnabledStates": true,
        "useDeckConstrains": true,
        "filters": [
            {
                "type": "match_phrase_prefix",
                "name": "Bundles",
                "tagName": "Name",
                "icon": "icon-stop-1",
                "dataField": "name",
                "nonAnalysedFieldSuffix": "na"
            },
            {
                "type": "match_phrase_prefix",
                "dataField": "channels.name",
                "nested": true,
                "nestedFieldPath": "channels",
                "nonAnalysedFieldSuffix": "na",
                "name": "Tv Channels",
                "sectionKey": "TV"
            }
        ]
    }
}
export default applicationSearchesConfig;