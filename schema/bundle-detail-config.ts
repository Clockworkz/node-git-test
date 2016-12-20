let bundleDetailConfig = {
    "schema": {
        "title": "bundleDetailConfig",
        "type": "object",
        "properties": {
            "include": {
                "type": "array",
                "title": "include",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "formData": {
        "include": [
            "globalID",
            "id",
            "baseId",
            "name",
            "contractLength",
            "hasContract",
            "provider",
            "cost",
            "isExpired",
            "ofComMarkets",
            "services",
            "moreInfo",
            "offers",
            "applyedOffers",
            "code",
            "vendorAttributes"
        ]
    }
}
export default bundleDetailConfig;