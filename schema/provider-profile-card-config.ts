let providerProfileCardConfig = {
    "schema": {
        "title": "providerProfileCardConfig",
        "type": "object",
        "properties": {
            "providers": {
                "type": "array",
                "title": "providers",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "title": "name"
                        },
                        "id": {
                            "type": "string",
                            "title": "id"
                        },
                        "imageUrl": {
                            "type": "string",
                            "title": "imageUrl"
                        },
                        "priority": {
                            "type": "number",
                            "title": "priority"
                        }
                    }
                }
            },
            "services": {
                "type": "array",
                "title": "services",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "title": "name"
                        },
                        "icon": {
                            "type": "string",
                            "title": "icon"
                        }
                    }
                }
            }
        }
    },
    "formData": {
        "providers": [
            {
                "name": "EE",
                "id": "ee",
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/ee_80x50.png"
            },
            {
                "name": "Freesat",
                "id": "freesat",
                "priority": 2,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/freesat_80x50.png"
            },
            {
                "name": "JohnLewis",
                "id": "johnlewis",
                "priority": 3,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/johnlewis_80x50.png"
            },
            {
                "name": "Fuel",
                "id": "fuel",
                "priority": 4,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/fuelbroadband_80x50.png"
            },
            {
                "name": "Virgin media",
                "id": "virgin",
                "priority": 5,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/virginmedia_80x50.png"
            },
            {
                "name": "Plusnet",
                "id": "plusnet",
                "priority": 6,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/plusnet_80x50.png"
            },
            {
                "name": "BT",
                "id": "bt",
                "priority": 7,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/bt_80x50.png"
            },
            {
                "name": "Freeview",
                "id": "freeview",
                "priority": 8,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/freeview_80x50.png"
            },
            {
                "name": "TalkTalk",
                "id": "talktalk",
                "priority": 9,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/talktalk_80x50.png"
            },
            {
                "name": "Sky",
                "id": "sky",
                "priority": 10,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos-optimised/sky_80x50.png"
            },
            {
                "name": "Post Office",
                "id": "postoffice",
                "priority": 11,
                "imageUrl": "https://assets.simplifydigital.co.uk/provider-logos/postoffice_80x50.png"
            }
        ],
        "services": [
            {
                "name": "TV",
                "icon": "icon-monitor"
            },
            {
                "name": "Broadband",
                "icon": "icon-wifi"
            },
            {
                "name": "Phone",
                "icon": "icon-phone"
            }
        ]
    }
}
export default providerProfileCardConfig;