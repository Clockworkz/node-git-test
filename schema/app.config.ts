let appConfig = {
    "schema": {
        "title": "appConfig",
        "type": "object",
        "properties": {
            "server": {
                "type": "object",
                "title": "server",
                "properties": {
                    "baseUrl": {
                        "type": "object",
                        "title": "baseUrl",
                        "properties": {
                            "value": {
                                "type": "string",
                                "title": "value"
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
                    "apiKey": {
                        "type": "object",
                        "title": "apiKey",
                        "properties": {
                            "value": {
                                "type": "string",
                                "title": "value"
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
            "client": {
                "type": "object",
                "title": "client",
                "properties": {
                    "provider": {
                        "type": "object",
                        "title": "provider",
                        "properties": {
                            "value": {
                                "type": "object",
                                "title": "value",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                        "title": "name"
                                    },
                                    "ids": {
                                        "type": "array",
                                        "title": "ids",
                                        "items": {
                                            "type": "number"
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
                    "availabilityDisableUnavailablePackages": {
                        "type": "object",
                        "title": "availabilityDisableUnavailablePackages",
                        "properties": {
                            "value": {
                                "type": "boolean",
                                "title": "value"
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
            }
        }
    },
    "formData": {
        "server": {
            "baseUrl": {
                "value": "",
                "type": "string",
                "description": "Server base url"
            },
            "apiKey": {
                "value": "",
                "type": "guid",
                "description": "Production API key for ziggy services"
            }
        },
        "client": {
            "provider": {
                "value": {
                    "name": "vodafone",
                    "ids": [
                        130,
                        202,
                        201,
                        204,
                        205
                    ]
                },
                "type": "Object",
                "description": "Provider object"
            },
            "availabilityDisableUnavailablePackages": {
                "value": true,
                "type": "boolean",
                "description": "If true, disables the packages according to their availability result. Shows all as available otherwise."
            }
        }
    }
}
export default appConfig;