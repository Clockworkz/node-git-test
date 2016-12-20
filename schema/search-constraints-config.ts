let searchConstraintsConfig = {
    "schema": {
        "title": "searchConstraintsConfig",
        "type": "object",
        "properties": {
            "size": {
                "type": "number",
                "title": "size"
            },
            "providerIds": {
                "type": "array",
                "title": "providerIds",
                "items": {
                    "type": "number"
                }
            }
        }
    },
    "formData": {
        "size": 5,
        "providerIds": [
            130,
            202,
            201,
            204,
            205
        ]
    }
}
export default searchConstraintsConfig;