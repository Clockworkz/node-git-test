let featuresConfiguration = {
    "schema": {
        "title": "featuresConfiguration",
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "title": "name"
            },
            "langtoken": {
                "type": "string",
                "title": "langtoken"
            },
            "icon": {
                "type": "string",
                "title": "icon"
            },
            "displayType": {
                "type": "string",
                "title": "displayType"
            },
            "bundlePrefix": {
                "type": "string",
                "title": "bundlePrefix"
            },
            "selected": {
                "type": "boolean",
                "title": "selected"
            },
            "open": {
                "type": "boolean",
                "title": "open"
            },
            "sorting": {
                "type": "array",
                "title": "sorting",
                "items": {
                    "type": "object",
                    "properties": {
                        "displayText": {
                            "type": "string",
                            "title": "displayText"
                        },
                        "name": {
                            "type": "string",
                            "title": "name"
                        },
                        "order": {
                            "type": "string",
                            "title": "order"
                        }
                    }
                }
            },
            "elements": {
                "type": "array",
                "title": "elements",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "title": "name"
                        },
                        "parent": {
                            "type": "string",
                            "title": "parent"
                        },
                        "langtoken": {
                            "type": "string",
                            "title": "langtoken"
                        },
                        "displayType": {
                            "type": "string",
                            "title": "displayType"
                        },
                        "items": {
                            "type": "array",
                            "title": "items",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "title": "name"
                                    },
                                    "parent": {
                                        "type": "string",
                                        "title": "parent"
                                    },
                                    "langtoken": {
                                        "type": "string",
                                        "title": "langtoken"
                                    },
                                    "displayType": {
                                        "type": "string",
                                        "title": "displayType"
                                    },
                                    "tagtoken": {
                                        "type": "string",
                                        "title": "tagtoken"
                                    },
                                    "elements": {
                                        "type": "array",
                                        "title": "elements",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "name": {
                                                    "type": "string",
                                                    "title": "name"
                                                },
                                                "langtoken": {
                                                    "type": "string",
                                                    "title": "langtoken"
                                                },
                                                "displayType": {
                                                    "type": "string",
                                                    "title": "displayType"
                                                },
                                                "dataField": {
                                                    "type": "string",
                                                    "title": "dataField"
                                                },
                                                "value": {
                                                    "type": "boolean",
                                                    "title": "value"
                                                },
                                                "queryType": {
                                                    "type": "string",
                                                    "title": "queryType"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "search": {
                "type": "object",
                "title": "search",
                "properties": {
                    "searchType": {
                        "type": "string",
                        "title": "searchType"
                    },
                    "fields": {
                        "type": "array",
                        "title": "fields",
                        "items": {
                            "type": "string"
                        }
                    },
                    "terms": {
                        "type": "array",
                        "title": "terms",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "formData": {
        "name": "Broadband",
        "langtoken": "filters.features.broadband.name",
        "icon": "icon-wifi",
        "displayType": "single-accordion",
        "bundlePrefix": "services.Broadband",
        "selected": true,
        "open": false,
        "sorting": [
            {
                "displayText": "Download speed",
                "name": "services.Broadband.maximumDownloadSpeed",
                "order": "desc"
            },
            {
                "displayText": "Data allowance",
                "name": "services.Broadband.downloadAllowance.value",
                "order": "desc"
            }
        ],
        "search": {
            "searchType": "AND",
            "fields": [],
            "terms": []
        },
        "elements": [
            {
                "name": "features",
                "parent": "Broadband",
                "langtoken": "filters.features.broadband.elements.features.name",
                "displayType": "menu",
                "items": [
                    {
                        "name": "speed",
                        "parent": "Broadband.specs",
                        "langtoken": "filters.features.broadband.elements.features.items.speed.name",
                        "displayType": "single-combo",
                        "tagtoken": "filters.features.broadband.elements.features.items.speed.tag",
                        "elements": [
                            {
                                "name": "Select a value",
                                "langtoken": "filters.shared.selectAValue",
                                "displayType": "clear",
                                "dataField": ""
                            },
                            {
                                "value": 17,
                                "name": "basic",
                                "langtoken": "filters.features.broadband.elements.features.items.speed.values.basic",
                                "queryType": "limit",
                                "displayType": "bool",
                                "dataField": "services.Broadband.maximumDownloadSpeed"
                            },
                            {
                                "value": {
                                    "from": 17,
                                    "to": 38
                                },
                                "name": "fast",
                                "langtoken": "filters.features.broadband.elements.features.items.speed.values.fast",
                                "queryType": "range",
                                "displayType": "bool",
                                "dataField": "services.Broadband.maximumDownloadSpeed"
                            },
                            {
                                "value": 38,
                                "name": "superfast",
                                "langtoken": "filters.features.broadband.elements.features.items.speed.values.superfast",
                                "queryType": "minimum-value",
                                "displayType": "bool",
                                "dataField": "services.Broadband.maximumDownloadSpeed"
                            }
                        ]
                    },
                    {
                        "name": "dataAllowance",
                        "parent": "Broadband.specs",
                        "langtoken": "filters.features.broadband.elements.features.items.dataAllowance.name",
                        "displayType": "single-combo",
                        "tagtoken": "filters.features.broadband.elements.features.items.dataAllowance.tag",
                        "elements": [
                            {
                                "name": "Select a value",
                                "langtoken": "filters.shared.selectAValue",
                                "displayType": "clear",
                                "dataField": ""
                            },
                            {
                                "value": 10,
                                "name": "10",
                                "langtoken": "filters.features.broadband.elements.features.items.dataAllowance.values.10",
                                "queryType": "minimum-value",
                                "displayType": "bool",
                                "dataField": "services.Broadband.downloadAllowance.value"
                            },
                            {
                                "value": 50,
                                "name": "50",
                                "langtoken": "filters.features.broadband.elements.features.items.dataAllowance.values.50",
                                "queryType": "minimum-value",
                                "displayType": "bool",
                                "dataField": "services.Broadband.downloadAllowance.value"
                            },
                            {
                                "value": 100,
                                "name": "100",
                                "langtoken": "filters.features.broadband.elements.features.items.dataAllowance.values.100",
                                "queryType": "minimum-value",
                                "displayType": "bool",
                                "dataField": "services.Broadband.downloadAllowance.value"
                            },
                            {
                                "value": false,
                                "name": "unlimited",
                                "langtoken": "filters.features.broadband.elements.features.items.dataAllowance.values.unlimited",
                                "queryType": "term",
                                "displayType": "bool",
                                "dataField": "services.Broadband.downloadAllowance.limited"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
export default featuresConfiguration;