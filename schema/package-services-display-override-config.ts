let packageServicesDisplayOverrideConfig = {
    "schema": {
        "title": "packageServicesDisplayOverrideConfig",
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "title": "name"
            },
            "queryField": {
                "type": "string",
                "title": "queryField"
            },
            "icon": {
                "type": "string",
                "title": "icon"
            },
            "dataField": {
                "type": "string",
                "title": "dataField"
            },
            "componentDetailsName": {
                "type": "string",
                "title": "componentDetailsName"
            },
            "isSingleLine": {
                "type": "boolean",
                "title": "isSingleLine"
            },
            "allowShowMoreInfo": {
                "type": "boolean",
                "title": "allowShowMoreInfo"
            },
            "values": {
                "type": "array",
                "title": "values",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "title": "name"
                        },
                        "value": {
                            "type": "string",
                            "title": "value"
                        },
                        "comparison": {
                            "type": "string",
                            "title": "comparison"
                        },
                        "dataField": {
                            "type": "object",
                            "title": "dataField",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "title": "name"
                                },
                                "direction": {
                                    "type": "string",
                                    "title": "direction"
                                }
                            }
                        },
                        "type": {
                            "type": "object",
                            "title": "type",
                            "properties": {
                                "isProperty": {
                                    "type": "boolean",
                                    "title": "isProperty"
                                },
                                "bindingHandler": {
                                    "type": "string",
                                    "title": "bindingHandler"
                                }
                            }
                        },
                        "conditions": {
                            "type": "array",
                            "title": "conditions",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "field": {
                                        "type": "string",
                                        "title": "field"
                                    },
                                    "operation": {
                                        "type": "string",
                                        "title": "operation"
                                    },
                                    "value": {
                                        "type": "array",
                                        "title": "value",
                                        "items": {
                                            "type": "number"
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
    "formData": {
        "name": "Mobile",
        "queryField": "mb",
        "icon": "md-icon icon-mobile",
        "dataField": "name",
        "componentDetailsName": "sd-mobile-details",
        "isSingleLine": false,
        "values": [
            {
                "name": "Operative System",
                "value": "device.os.name",
                "comparison": "incomparable",
                "dataField": {
                    "name": "device.os.name",
                    "direction": "default"
                },
                "type": {
                    "isProperty": true,
                    "bindingHandler": null
                }
            },
            {
                "name": "Display Size",
                "value": "device.display.sizeInInches",
                "comparison": "absolute",
                "dataField": {
                    "name": "device.display.sizeInInches",
                    "direction": "default"
                },
                "type": {
                    "isProperty": true,
                    "bindingHandler": null
                }
            },
            {
                "name": "Number of Minutes",
                "value": "tariff.voice",
                "comparison": "limits",
                "dataField": {
                    "name": "tariff.voice",
                    "direction": "default",
                    "label": "Mins"
                },
                "type": {
                    "isProperty": false,
                    "bindingHandler": "infinityField"
                }
            },
            {
                "name": "Number of Texts",
                "value": "tariff.sms",
                "comparison": "limits",
                "dataField": {
                    "name": "tariff.sms",
                    "direction": "default",
                    "label": "Texts"
                },
                "type": {
                    "isProperty": false,
                    "bindingHandler": "infinityField"
                }
            },
            {
                "name": "Number of Data",
                "value": "tariff.data",
                "comparison": "absolute",
                "dataField": {
                    "name": "tariff.data",
                    "direction": "default"
                },
                "type": {
                    "isProperty": false,
                    "bindingHandler": "mobileData"
                }
            },
            {
                "name": "Device Type",
                "conditions": [
                    {
                        "field": "device.deviceType.id",
                        "operation": "contains",
                        "value": [
                            3,
                            4
                        ]
                    }
                ],
                "value": "device.deviceType.name",
                "comparison": "incomparable",
                "dataField": {
                    "name": "device.deviceType.name",
                    "direction": "default"
                },
                "type": {
                    "isProperty": true,
                    "bindingHandler": null
                }
            },
            {
                "name": "Network Type",
                "conditions": [
                    {
                        "field": "device.deviceType.id",
                        "operation": "contains",
                        "value": [
                            3,
                            4
                        ]
                    }
                ],
                "value": "tariff.networkType",
                "comparison": "biggest",
                "dataField": {
                    "name": "tariff.networkType",
                    "direction": "default"
                },
                "type": {
                    "isProperty": true,
                    "bindingHandler": null
                }
            }
        ]
    }
}
export default packageServicesDisplayOverrideConfig;