let endpointConfig = {
    "schema": {
        "title": "endpointConfig",
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "title": "url"
            },
            "packageUrl": {
                "type": "string",
                "title": "packageUrl"
            },
            "refineApiUrl": {
                "type": "string",
                "title": "refineApiUrl"
            },
            "addonsApiUrl": {
                "type": "object",
                "title": "addonsApiUrl",
                "properties": {
                    "singlePackageEndpoint": {
                        "type": "string",
                        "title": "singlePackageEndpoint"
                    },
                    "multiPackageEndpoint": {
                        "type": "string",
                        "title": "multiPackageEndpoint"
                    }
                }
            },
            "geoApiUrl": {
                "type": "string",
                "title": "geoApiUrl"
            },
            "elasticSearchInstance": {
                "type": "string",
                "title": "elasticSearchInstance"
            },
            "index": {
                "type": "string",
                "title": "index"
            },
            "logIndex": {
                "type": "string",
                "title": "logIndex"
            },
            "covertOffersIndex": {
                "type": "string",
                "title": "covertOffersIndex"
            },
            "documentTypes": {
                "type": "object",
                "title": "documentTypes",
                "properties": {
                    "bundles": {
                        "type": "string",
                        "title": "bundles"
                    },
                    "providers": {
                        "type": "string",
                        "title": "providers"
                    },
                    "offers": {
                        "type": "string",
                        "title": "offers"
                    }
                }
            },
            "actions": {
                "type": "object",
                "title": "actions",
                "properties": {
                    "reverseSearch": {
                        "type": "string",
                        "title": "reverseSearch"
                    },
                    "availability": {
                        "type": "string",
                        "title": "availability"
                    }
                }
            },
            "providerFieldName": {
                "type": "string",
                "title": "providerFieldName"
            },
            "blockedProviders": {
                "type": "array",
                "title": "blockedProviders",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "formData": {
        "url": "http://odin.staging.simplifyapi.net/api/v1/search/",
        "packageUrl": "http://odin.staging.simplifyapi.net/api/v1/{action}/{index}/{document-type}/{id}",
        "refineApiUrl": "http://odin.staging.simplifyapi.net/api/v1/refine/{index}/{document-type}/{bundle-id}/{service-refine}/?{query-string}",
        "addonsApiUrl": {
            "singlePackageEndpoint": "http://172.30.40.16:8008/addons-api/dev/base-bundle/{id}?{query-string}",
            "multiPackageEndpoint": "http://172.30.40.16:8008/addons-api/multiple/dev/base-bundle?{query-string}"
        },
        "geoApiUrl": "https://geo-api.simplifydigital.co.uk/v2.1",
        "elasticSearchInstance": "http://sphinx-elastic.cloudapp.net:9200/{index}/{type}",
        "index": "dev",
        "logIndex": "sphinx-log",
        "covertOffersIndex": "covert-offers",
        "documentTypes": {
            "bundles": "bundle-detail",
            "providers": "providers",
            "offers": "covert-offer"
        },
        "actions": {
            "reverseSearch": "reverse",
            "availability": "availability"
        },
        "providerFieldName": "provider",
        "blockedProviders": []
    }
}
export default endpointConfig;