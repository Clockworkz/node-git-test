let bundleSummaryConfig = {
    "schema": {
        "title": "bundleSummaryConfig",
        "type": "object",
        "properties": {
            "include": {
                "type": "array",
                "title": "include",
                "items": {
                    "type": "string"
                }
            },
            "exclude": {
                "type": "array",
                "title": "exclude",
                "items": {
                    "type": "string"
                }
            }
        }
    },
    "formData": {
        "include": [
            "globalID",
            "id",
            "name",
            "contractLength",
            "hasContract",
            "provider",
            "cost",
            "isExpired",
            "ofComMarkets",
            "services.Broadband.globalID",
            "services.Broadband.technology",
            "services.Broadband.downloadAllowance",
            "services.Broadband.maximumDownloadSpeed",
            "services.Phone.globalID",
            "services.Phone.freeCallsSummary",
            "services.TV.globalID",
            "services.TV.channelsAggregations.numOfChannels",
            "services.TV.channelsAggregations.numOfHDChannels"
        ],
        "exclude": []
    }
}
export default bundleSummaryConfig;