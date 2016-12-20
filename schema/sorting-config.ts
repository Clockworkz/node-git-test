let sortingConfig = {
    "schema": {
        "title": "sortingConfig",
        "type": "object",
        "properties": {
            "displayText": {
                "type": "string",
                "title": "displayText"
            },
            "dataField": {
                "type": "string",
                "title": "dataField"
            },
            "value": {
                "type": "string",
                "title": "value"
            }
        }
    },
    "formData": {
        "displayText": "First Year Cost",
        "dataField": "cost.totalFirstYearAmount",
        "value": "asc"
    }
}
export default sortingConfig;