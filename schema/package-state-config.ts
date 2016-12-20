let packageStateConfig = {
    "schema": {
        "title": "packageStateConfig",
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "title": "name"
            },
            "displayName": {
                "type": "string",
                "title": "displayName"
            },
            "tabTitle": {
                "type": "string",
                "title": "tabTitle"
            },
            "icon": {
                "type": "string",
                "title": "icon"
            },
            "selected": {
                "type": "boolean",
                "title": "selected"
            },
            "multiple": {
                "type": "boolean",
                "title": "multiple"
            },
            "allowChangePackage": {
                "type": "boolean",
                "title": "allowChangePackage"
            },
            "allowRefine": {
                "type": "boolean",
                "title": "allowRefine"
            },
            "allowPriceEdit": {
                "type": "boolean",
                "title": "allowPriceEdit"
            },
            "enabled": {
                "type": "boolean",
                "title": "enabled"
            },
            "showConfirmOrder": {
                "type": "boolean",
                "title": "showConfirmOrder"
            },
            "showRemovePackage": {
                "type": "boolean",
                "title": "showRemovePackage"
            },
            "showRemoveService": {
                "type": "boolean",
                "title": "showRemoveService"
            },
            "showAll": {
                "type": "boolean",
                "title": "showAll"
            },
            "allowDeselect": {
                "type": "boolean",
                "title": "allowDeselect"
            },
            "redCallToAction": {
                "type": "boolean",
                "title": "redCallToAction"
            },
            "constrainedByProvider": {
                "type": "boolean",
                "title": "constrainedByProvider"
            }
        }
    },
    "formData": {
        "name": "basket",
        "tabTitle": "Saved package",
        "displayName": "basket",
        "icon": "",
        "selected": false,
        "allowDeselect": true,
        "multiple": true,
        "allowChangePackage": false,
        "showAll": true,
        "allowRefine": true,
        "allowPriceEdit": false,
        "enabled": true,
        "showRemovePackage": false,
        "showRemoveService": false,
        "redCallToAction": true,
        "constrainedByProvider": true
    }
}
export default packageStateConfig;