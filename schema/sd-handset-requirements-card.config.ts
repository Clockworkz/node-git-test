let sdHandsetRequirementsCardConfig = {
    "schema": {
        "title": "sdHandsetRequirementsCardConfig",
        "type": "object",
        "properties": {
            "aggregations": {
                "type": "object",
                "title": "aggregations",
                "properties": {
                    "value": {
                        "type": "object",
                        "title": "value",
                        "properties": {
                            "devices": {
                                "type": "object",
                                "title": "devices",
                                "properties": {
                                    "terms": {
                                        "type": "object",
                                        "title": "terms",
                                        "properties": {
                                            "field": {
                                                "type": "string",
                                                "title": "field"
                                            },
                                            "size": {
                                                "type": "number",
                                                "title": "size"
                                            }
                                        }
                                    },
                                    "aggs": {
                                        "type": "object",
                                        "title": "aggs",
                                        "properties": {
                                            "name": {
                                                "type": "object",
                                                "title": "name",
                                                "properties": {
                                                    "terms": {
                                                        "type": "object",
                                                        "title": "terms",
                                                        "properties": {
                                                            "field": {
                                                                "type": "string",
                                                                "title": "field"
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "popularity": {
                                                "type": "object",
                                                "title": "popularity",
                                                "properties": {
                                                    "terms": {
                                                        "type": "object",
                                                        "title": "terms",
                                                        "properties": {
                                                            "field": {
                                                                "type": "string",
                                                                "title": "field"
                                                            }
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
                    "type": {
                        "type": "string",
                        "title": "type"
                    },
                    "description": {
                        "type": "string",
                        "title": "description"
                    }
                }
            },
            "SIMDevices": {
                "type": "object",
                "title": "SIMDevices",
                "properties": {
                    "value": {
                        "type": "array",
                        "title": "value",
                        "items": {
                            "type": "number"
                        }
                    },
                    "type": {
                        "type": "string",
                        "title": "type"
                    },
                    "description": {
                        "type": "string",
                        "title": "description"
                    }
                }
            }
        }
    },
    "formData": {
        "aggregations": {
            "value": {
                "devices": {
                    "terms": {
                        "field": "services.Mobile.device.id",
                        "size": 30
                    },
                    "aggs": {
                        "name": {
                            "terms": {
                                "field": "services.Mobile.device.name"
                            }
                        },
                        "popularity": {
                            "terms": {
                                "field": "services.Mobile.device.popularity"
                            }
                        }
                    }
                }
            },
            "type": "Object",
            "description": "Aggregations object"
        },
        "SIMDevices": {
            "value": [
                5,
                6
            ],
            "type": "Array",
            "description": "List of device type ids for SIMs"
        }
    }
}
export default sdHandsetRequirementsCardConfig;