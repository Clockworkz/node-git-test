let reverseSearchConfig = {
    "schema": {
        "title": "reverseSearchConfig",
        "type": "object",
        "properties": {
            "upsell": {
                "type": "object",
                "title": "upsell",
                "properties": {
                    "fields": {
                        "type": "object",
                        "title": "fields",
                        "properties": {
                            "should": {
                                "type": "array",
                                "title": "should",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "must_not": {
                                "type": "array",
                                "title": "must_not",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "must": {
                                "type": "array",
                                "title": "must",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "title": "name"
                                        },
                                        "operator": {
                                            "type": "string",
                                            "title": "operator"
                                        },
                                        "more": {
                                            "type": "string",
                                            "title": "more"
                                        },
                                        "less": {
                                            "type": "string",
                                            "title": "less"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "scoring": {
                        "type": "array",
                        "title": "scoring",
                        "items": {
                            "type": "object",
                            "properties": {
                                "operator": {
                                    "type": "string",
                                    "title": "operator"
                                },
                                "name": {
                                    "type": "string",
                                    "title": "name"
                                },
                                "scale": {
                                    "type": "number",
                                    "title": "scale"
                                }
                            }
                        }
                    },
                    "top_hits": {
                        "type": "array",
                        "title": "top_hits",
                        "items": {
                            "type": "object",
                            "properties": {
                                "field": {
                                    "type": "string",
                                    "title": "field"
                                },
                                "num_results": {
                                    "type": "number",
                                    "title": "num_results"
                                },
                                "blocklist": {
                                    "type": "array",
                                    "title": "blocklist",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "sort": {
                                    "type": "array",
                                    "title": "sort",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "_score": {
                                                "type": "string",
                                                "title": "_score"
                                            },
                                            "services.Broadband.maximumDownloadSpeed": {
                                                "type": "string",
                                                "title": "services.Broadband.maximumDownloadSpeed"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "all_services": {
                        "type": "array",
                        "title": "all_services",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "upsell-mobile": {
                "type": "object",
                "title": "upsell-mobile",
                "properties": {
                    "fields": {
                        "type": "object",
                        "title": "fields",
                        "properties": {
                            "should": {
                                "type": "array",
                                "title": "should",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "must_not": {
                                "type": "array",
                                "title": "must_not",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "must": {
                                "type": "array",
                                "title": "must",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "title": "name"
                                        },
                                        "operator": {
                                            "type": "string",
                                            "title": "operator"
                                        },
                                        "more": {
                                            "type": "string",
                                            "title": "more"
                                        },
                                        "less": {
                                            "type": "string",
                                            "title": "less"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "scoring": {
                        "type": "array",
                        "title": "scoring",
                        "items": {
                            "type": "object",
                            "properties": {
                                "operator": {
                                    "type": "string",
                                    "title": "operator"
                                },
                                "name": {
                                    "type": "string",
                                    "title": "name"
                                },
                                "scale": {
                                    "type": "number",
                                    "title": "scale"
                                }
                            }
                        }
                    },
                    "top_hits": {
                        "type": "array",
                        "title": "top_hits",
                        "items": {
                            "type": "object",
                            "properties": {
                                "field": {
                                    "type": "string",
                                    "title": "field"
                                },
                                "num_results": {
                                    "type": "number",
                                    "title": "num_results"
                                },
                                "blocklist": {
                                    "type": "array",
                                    "title": "blocklist",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "sort": {
                                    "type": "array",
                                    "title": "sort",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "_score": {
                                                "type": "string",
                                                "title": "_score"
                                            },
                                            "services.Mobile.tariff.data": {
                                                "type": "string",
                                                "title": "services.Mobile.tariff.data"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "all_services": {
                        "type": "array",
                        "title": "all_services",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "reverse": {
                "type": "object",
                "title": "reverse",
                "properties": {
                    "fields": {
                        "type": "object",
                        "title": "fields",
                        "properties": {
                            "should": {
                                "type": "array",
                                "title": "should",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "title": "name"
                                        },
                                        "operator": {
                                            "type": "string",
                                            "title": "operator"
                                        },
                                        "wrapInConstantScore": {
                                            "type": "boolean",
                                            "title": "wrapInConstantScore"
                                        },
                                        "addOnlyIfRefPackageHasThisValue": {
                                            "type": "boolean",
                                            "title": "addOnlyIfRefPackageHasThisValue"
                                        }
                                    }
                                }
                            },
                            "must_not": {
                                "type": "array",
                                "title": "must_not",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "title": "name"
                                        },
                                        "operator": {
                                            "type": "string",
                                            "title": "operator"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "scoring": {
                        "type": "array",
                        "title": "scoring",
                        "items": {
                            "type": "object",
                            "properties": {
                                "operator": {
                                    "type": "string",
                                    "title": "operator"
                                },
                                "name": {
                                    "type": "string",
                                    "title": "name"
                                },
                                "scale": {
                                    "type": "number",
                                    "title": "scale"
                                }
                            }
                        }
                    },
                    "top_hits": {
                        "type": "array",
                        "title": "top_hits",
                        "items": {
                            "type": "object",
                            "properties": {
                                "field": {
                                    "type": "string",
                                    "title": "field"
                                },
                                "num_results": {
                                    "type": "number",
                                    "title": "num_results"
                                },
                                "blocklist": {
                                    "type": "array",
                                    "title": "blocklist",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "sort": {
                                    "type": "array",
                                    "title": "sort",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "_score": {
                                                "type": "string",
                                                "title": "_score"
                                            },
                                            "cost.totalFirstYearAmount": {
                                                "type": "string",
                                                "title": "cost.totalFirstYearAmount"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "all_services": {
                        "type": "array",
                        "title": "all_services",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            },
            "refine": {
                "type": "object",
                "title": "refine",
                "properties": {
                    "fields": {
                        "type": "object",
                        "title": "fields",
                        "properties": {
                            "must": {
                                "type": "array",
                                "title": "must",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "title": "name"
                                        },
                                        "operator": {
                                            "type": "string",
                                            "title": "operator"
                                        }
                                    }
                                }
                            },
                            "should": {
                                "type": "array",
                                "title": "should",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string",
                                            "title": "name"
                                        },
                                        "operator": {
                                            "type": "string",
                                            "title": "operator"
                                        },
                                        "wrapInConstantScore": {
                                            "type": "boolean",
                                            "title": "wrapInConstantScore"
                                        },
                                        "addOnlyIfRefPackageHasThisValue": {
                                            "type": "boolean",
                                            "title": "addOnlyIfRefPackageHasThisValue"
                                        }
                                    }
                                }
                            },
                            "must_not": {
                                "type": "array",
                                "title": "must_not",
                                "items": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "scoring": {
                        "type": "array",
                        "title": "scoring",
                        "items": {
                            "type": "object",
                            "properties": {
                                "operator": {
                                    "type": "string",
                                    "title": "operator"
                                },
                                "name": {
                                    "type": "string",
                                    "title": "name"
                                },
                                "scale": {
                                    "type": "number",
                                    "title": "scale"
                                }
                            }
                        }
                    },
                    "top_hits": {
                        "type": "array",
                        "title": "top_hits",
                        "items": {
                            "type": "object",
                            "properties": {
                                "field": {
                                    "type": "string",
                                    "title": "field"
                                },
                                "num_results": {
                                    "type": "number",
                                    "title": "num_results"
                                },
                                "blocklist": {
                                    "type": "array",
                                    "title": "blocklist",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "sort": {
                                    "type": "array",
                                    "title": "sort",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "_score": {
                                                "type": "string",
                                                "title": "_score"
                                            },
                                            "cost.totalFirstYearAmount": {
                                                "type": "string",
                                                "title": "cost.totalFirstYearAmount"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "all_services": {
                        "type": "array",
                        "title": "all_services",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }
        }
    },
    "formData": {
        "upsell": {
            "fields": {
                "should": [],
                "must_not": [],
                "must": [
                    {
                        "name": "provider.id",
                        "operator": "term"
                    },
                    {
                        "name": "services.Broadband.maximumDownloadSpeed",
                        "operator": "range",
                        "more": "100",
                        "less": "-1"
                    },
                    {
                        "name": "services.Phone.freeCalls.Daytime",
                        "operator": "term"
                    },
                    {
                        "name": "services.Phone.freeCalls.Evening",
                        "operator": "term"
                    },
                    {
                        "name": "services.Phone.freeCalls.Weekend",
                        "operator": "term"
                    },
                    {
                        "name": "services.Phone.freeCalls.International",
                        "operator": "term"
                    },
                    {
                        "name": "services.Phone.freeCalls.Mobile",
                        "operator": "term"
                    }
                ]
            },
            "scoring": [
                {
                    "operator": "gauss",
                    "name": "services.TV.grade",
                    "scale": 20
                },
                {
                    "operator": "custom-pvr-gauss",
                    "name": "services.TV.equipment.default.recordingCapacity",
                    "scale": 300
                },
                {
                    "operator": "gauss",
                    "name": "services.Broadband.maximumDownloadSpeed",
                    "scale": 20
                },
                {
                    "operator": "gauss",
                    "name": "services.Broadband.downloadAllowance.comparable",
                    "scale": 50
                }
            ],
            "top_hits": [
                {
                    "field": "provider.id",
                    "num_results": 1,
                    "blocklist": [],
                    "sort": [
                        {
                            "_score": "desc"
                        },
                        {
                            "services.Broadband.maximumDownloadSpeed": "asc"
                        }
                    ]
                }
            ],
            "all_services": [
                "TV",
                "Broadband",
                "Phone"
            ]
        },
        "upsell-mobile": {
            "fields": {
                "should": [],
                "must_not": [],
                "must": [
                    {
                        "name": "provider.id",
                        "operator": "term"
                    },
                    {
                        "name": "services.Mobile.device.id",
                        "operator": "term"
                    },
                    {
                        "name": "services.Mobile.tariff.data",
                        "operator": "range",
                        "more": "30000",
                        "less": "-1"
                    },
                    {
                        "name": "vendorAttributes.isRedPlan",
                        "operator": "term"
                    },
                    {
                        "name": "vendorAttributes.isRedSharer",
                        "operator": "term"
                    }
                ]
            },
            "scoring": [
                {
                    "operator": "gauss",
                    "name": "services.Mobile.tariff.data",
                    "scale": 20
                }
            ],
            "top_hits": [
                {
                    "field": "provider.id",
                    "num_results": 1,
                    "blocklist": [],
                    "sort": [
                        {
                            "_score": "desc"
                        },
                        {
                            "services.Mobile.tariff.data": "asc"
                        }
                    ]
                }
            ],
            "all_services": [
                "Mobile"
            ]
        },
        "reverse": {
            "fields": {
                "should": [
                    {
                        "name": "services.Broadband.technology",
                        "operator": "term",
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.Daytime",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.Evening",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.Weekend",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.International",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    }
                ],
                "must_not": [
                    {
                        "name": "provider.id",
                        "operator": "term"
                    }
                ]
            },
            "scoring": [
                {
                    "operator": "gauss",
                    "name": "services.TV.grade",
                    "scale": 20
                },
                {
                    "operator": "custom-pvr-gauss",
                    "name": "services.TV.equipment.default.recordingCapacity",
                    "scale": 300
                },
                {
                    "operator": "gauss",
                    "name": "services.Broadband.maximumDownloadSpeed",
                    "scale": 20
                },
                {
                    "operator": "gauss",
                    "name": "services.Broadband.downloadAllowance.comparable",
                    "scale": 50
                }
            ],
            "top_hits": [
                {
                    "field": "provider.id",
                    "num_results": 1,
                    "blocklist": [],
                    "sort": [
                        {
                            "_score": "desc"
                        },
                        {
                            "cost.totalFirstYearAmount": "asc"
                        }
                    ]
                }
            ],
            "all_services": [
                "TV",
                "Broadband",
                "Phone"
            ]
        },
        "refine": {
            "fields": {
                "must": [
                    {
                        "name": "provider.id",
                        "operator": "term"
                    }
                ],
                "should": [
                    {
                        "name": "services.Broadband.technology",
                        "operator": "term",
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.Daytime",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.Evening",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.Weekend",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    },
                    {
                        "name": "services.Phone.freeCalls.International",
                        "operator": "term",
                        "addOnlyIfRefPackageHasThisValue": true,
                        "wrapInConstantScore": true
                    }
                ],
                "must_not": []
            },
            "scoring": [
                {
                    "operator": "gauss",
                    "name": "services.TV.grade",
                    "scale": 20
                },
                {
                    "operator": "custom-pvr-gauss",
                    "name": "services.TV.equipment.default.recordingCapacity",
                    "scale": 300
                },
                {
                    "operator": "gauss",
                    "name": "services.Broadband.maximumDownloadSpeed",
                    "scale": 20
                },
                {
                    "operator": "gauss",
                    "name": "services.Broadband.downloadAllowance.comparable",
                    "scale": 50
                },
                {
                    "operator": "gauss",
                    "name": "services.Mobile.tariff.data",
                    "scale": 20
                }
            ],
            "top_hits": [
                {
                    "field": "provider.id",
                    "num_results": 1,
                    "blocklist": [],
                    "sort": [
                        {
                            "_score": "desc"
                        },
                        {
                            "cost.totalFirstYearAmount": "asc"
                        }
                    ]
                }
            ],
            "all_services": [
                "TV",
                "Broadband",
                "Phone",
                "Mobile"
            ]
        }
    }
}
export default reverseSearchConfig;