let sdProfilingConfig = {
    "schema": {
        "title": "sdProfilingConfig",
        "type": "object",
        "properties": {
            "majorQueryMessage": {
                "type": "object",
                "title": "majorQueryMessage",
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
        "majorQueryMessage": {
            "value": "Card disabled: please deselect the selected package to enable it again",
            "type": "String",
            "description": "Message to be displayed when a card is disabled by a major query"
        }
    }
}
export default sdProfilingConfig;