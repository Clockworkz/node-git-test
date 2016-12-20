let clientConfiguration = {
    "schema": {
        "title": "clientConfiguration",
        "type": "object",
        "properties": {
            "id": {
                "type": "number",
                "title": "id"
            },
            "name": {
                "type": "string",
                "title": "name"
            },
            "logo": {
                "type": "string",
                "title": "logo"
            },
            "logoUrl": {
                "type": "string",
                "title": "logoUrl"
            },
            "suggested": {
                "type": "boolean",
                "title": "suggested"
            },
            "suggestedProvidersOrder": {
                "type": "array",
                "title": "suggestedProvidersOrder",
                "items": {
                    "type": "number"
                }
            },
            "cloneCurrentToNew": {
                "type": "boolean",
                "title": "cloneCurrentToNew"
            },
            "simultaneousBehaviour": {
                "type": "boolean",
                "title": "simultaneousBehaviour"
            },
            "showResetButton": {
                "type": "boolean",
                "title": "showResetButton"
            },
            "showPinnedButton": {
                "type": "boolean",
                "title": "showPinnedButton"
            },
            "closeModes": {
                "type": "array",
                "title": "closeModes",
                "items": {
                    "type": "object",
                    "properties": {
                        "searchKey": {
                            "type": "string",
                            "title": "searchKey"
                        },
                        "name": {
                            "type": "string",
                            "title": "name"
                        },
                        "master": {
                            "type": "string",
                            "title": "master"
                        },
                        "leftContent": {
                            "type": "object",
                            "title": "leftContent",
                            "properties": {
                                "tabs": {
                                    "type": "array",
                                    "title": "tabs",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "rightContent": {
                            "type": "object",
                            "title": "rightContent",
                            "properties": {
                                "tabs": {
                                    "type": "array",
                                    "title": "tabs",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "defaultText": {
                            "type": "string",
                            "title": "defaultText"
                        },
                        "allowSearchWhenEmpty": {
                            "type": "boolean",
                            "title": "allowSearchWhenEmpty"
                        },
                        "useProviderNameForLabel": {
                            "type": "boolean",
                            "title": "useProviderNameForLabel"
                        }
                    }
                }
            },
            "search": {
                "type": "object",
                "title": "search",
                "properties": {
                    "headerCTA": {
                        "type": "boolean",
                        "title": "headerCTA"
                    },
                    "footerCTA": {
                        "type": "boolean",
                        "title": "footerCTA"
                    }
                }
            },
            "mode": {
                "type": "object",
                "title": "mode",
                "properties": {
                    "name": {
                        "type": "string",
                        "title": "name"
                    },
                    "view": {
                        "type": "string",
                        "title": "view"
                    },
                    "comparison": {
                        "type": "boolean",
                        "title": "comparison"
                    },
                    "footer": {
                        "type": "boolean",
                        "title": "footer"
                    },
                    "statusButtons": {
                        "type": "object",
                        "title": "statusButtons",
                        "properties": {
                            "reasonForCall": {
                                "type": "boolean",
                                "title": "reasonForCall"
                            },
                            "closeModes": {
                                "type": "boolean",
                                "title": "closeModes"
                            }
                        }
                    }
                }
            },
            "language": {
                "type": "string",
                "title": "language"
            },
            "currency": {
                "type": "string",
                "title": "currency"
            }
        }
    },
    "formData": {
        "id": 2,
        "name": "Vodafone",
        "logo": "vodafone",
        "logoUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/vodafone_80x50.png",
        "suggested": true,
        "suggestedProvidersOrder": [
            3,
            1,
            2,
            5,
            167,
            10,
            160,
            96,
            13,
            145
        ],
        "cloneCurrentToNew": true,
        "simultaneousBehaviour": true,
        "showResetButton": true,
        "showPinnedButton": true,
        "closeModes": [
            {
                "searchKey": "upsell",
                "name": "Value",
                "master": "rightContent",
                "leftContent": {
                    "tabs": [
                        "basket"
                    ]
                },
                "rightContent": {
                    "tabs": [
                        "upsell"
                    ]
                },
                "defaultText": "Value mode",
                "allowSearchWhenEmpty": false
            },
            {
                "searchKey": "competitor",
                "name": "Comparison",
                "master": "leftContent",
                "leftContent": {
                    "tabs": [
                        "basket"
                    ]
                },
                "rightContent": {
                    "tabs": [
                        "threat"
                    ]
                },
                "defaultText": "Competitor mode",
                "useProviderNameForLabel": true,
                "allowSearchWhenEmpty": false
            }
        ],
        "search": {
            "headerCTA": false,
            "footerCTA": true
        },
        "mode": {
            "name": "deal-builder",
            "view": "sd-close-sale",
            "comparison": false,
            "footer": false,
            "statusButtons": {
                "reasonForCall": false,
                "closeModes": true
            }
        },
        "language": "en",
        "currency": "\u00c2\u00a3"
    }
}
export default clientConfiguration;