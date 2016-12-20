let genericContentServiceConfig = {
    "schema": {
        "title": "genericContentServiceConfig",
        "type": "object",
        "properties": {
            "cmsUrl": {
                "type": "object",
                "title": "cmsUrl",
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
            "scope": {
                "type": "object",
                "title": "scope",
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
    "formData": {
        "cmsUrl": {
            "value": "https://genericcontent.stagingssl.simplifysystems.co.uk/",
            "type": "",
            "description": ""
        },
        "scope": {
            "value": "ExpertAgent",
            "type": "string",
            "description": ""
        }
    }
}
export default genericContentServiceConfig;