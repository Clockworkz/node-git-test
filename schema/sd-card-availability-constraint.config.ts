let sdCardAvailabilityConstraintConfig = {
    "schema": {
        "title": "sdCardAvailabilityConstraintConfig",
        "type": "object",
        "properties": {
            "noBroadbandWarning": {
                "type": "object",
                "title": "noBroadbandWarning",
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
            "noFibreWarning": {
                "type": "object",
                "title": "noFibreWarning",
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
        "noBroadbandWarning": {
            "value": "The customer cannot get broadband",
            "type": "String",
            "description": "Message to be displayed in case availability returns no Broadband"
        },
        "noFibreWarning": {
            "value": "The customer can only get ADSL",
            "type": "String",
            "description": "Message to be displayed in case availability returns no Fibre"
        }
    }
}
export default sdCardAvailabilityConstraintConfig;