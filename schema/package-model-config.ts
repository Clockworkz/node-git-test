let packageModelConfig = {
    "schema": {
        "title": "packageModelConfig",
        "type": "object",
        "properties": {
            "toObs": {
                "type": "array",
                "title": "toObs",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "formData": {
        "toObs": [
            "isAvailable"
        ]
    }
}
export default packageModelConfig;