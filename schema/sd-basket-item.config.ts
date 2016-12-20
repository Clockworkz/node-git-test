let sdBasketItemConfig = {
    "schema": {
        "title": "sdBasketItemConfig",
        "type": "object",
        "properties": {
            "items": {
                "type": "object",
                "title": "items",
                "properties": {
                    "value": {
                        "type": "array",
                        "title": "value",
                        "items": {
                            "type": "object",
                            "properties": {
                                "type": {
                                    "type": "string",
                                    "title": "type"
                                },
                                "componentTagName": {
                                    "type": "string",
                                    "title": "componentTagName"
                                },
                                "serializeAccessor": {
                                    "type": "string",
                                    "title": "serializeAccessor"
                                },
                                "className": {
                                    "type": "string",
                                    "title": "className"
                                },
                                "attributes": {
                                    "type": "array",
                                    "title": "attributes",
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
                                            "isIdentifier": {
                                                "type": "boolean",
                                                "title": "isIdentifier"
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
            }
        }
    },
    "formData": {
        "items": {
            "value": [
                {
                    "type": "package",
                    "componentTagName": "sd-package-detail-wrapper",
                    "serializeAccessor": "packageData",
                    "className": "cn-is-package",
                    "attributes": [
                        {
                            "name": "type",
                            "value": "basket"
                        },
                        {
                            "name": "package-id",
                            "value": "id",
                            "isIdentifier": true
                        },
                        {
                            "name": "flyout-position",
                            "value": "right"
                        },
                        {
                            "name": "hide-cta-button",
                            "value": "true"
                        }
                    ]
                },
                {
                    "type": "cross-sell",
                    "componentTagName": "sd-product",
                    "serializeAccessor": "productData",
                    "className": "cn-is-product",
                    "attributes": [
                        {
                            "name": "product-id",
                            "value": "SKU",
                            "isIdentifier": true
                        }
                    ]
                }
            ],
            "type": "Array",
            "description": "List of items that the basket component can handle"
        }
    }
}
export default sdBasketItemConfig;