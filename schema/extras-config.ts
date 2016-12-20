let extrasConfig = {
    "schema": {
        "title": "extrasConfig",
        "type": "object",
        "properties": {
            "newLine": {
                "type": "object",
                "title": "newLine",
                "properties": {
                    "sectionKey": {
                        "type": "string",
                        "title": "sectionKey"
                    },
                    "typeId": {
                        "type": "number",
                        "title": "typeId"
                    },
                    "value": {
                        "type": "number",
                        "title": "value"
                    }
                }
            }
        }
    },
    "formData": {
        "newLine": {
            "sectionKey": "Phone",
            "typeId": 27,
            "value": 8005
        }
    }
}
export default extrasConfig;