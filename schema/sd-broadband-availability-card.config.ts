let sdBroadbandAvailabilityCardConfig = {
    "schema": {
        "title": "sdBroadbandAvailabilityCardConfig",
        "type": "object",
        "properties": {
            "mainProvider": {
                "type": "object",
                "title": "mainProvider",
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
            "loadingMessage": {
                "type": "object",
                "title": "loadingMessage",
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
            "addressesChecker": {
                "type": "object",
                "title": "addressesChecker",
                "properties": {
                    "timeout": {
                        "type": "object",
                        "title": "timeout",
                        "properties": {
                            "value": {
                                "type": "number",
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
            "addressesFinder": {
                "type": "object",
                "title": "addressesFinder",
                "properties": {
                    "provider": {
                        "type": "object",
                        "title": "provider",
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
            "errors": {
                "type": "object",
                "title": "errors",
                "properties": {
                    "error.default": {
                        "type": "object",
                        "title": "error.default",
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
                    "error.timeout": {
                        "type": "object",
                        "title": "error.timeout",
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
                    "error.cannot-estimate-speed": {
                        "type": "object",
                        "title": "error.cannot-estimate-speed",
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
                    "vodafone.error.broadband.cannot-estimate-speed": {
                        "type": "object",
                        "title": "vodafone.error.broadband.cannot-estimate-speed",
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
                    "vodafone.error.phone.landline.invalid": {
                        "type": "object",
                        "title": "vodafone.error.phone.landline.invalid",
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
                    "vodafone.error.address.not-match": {
                        "type": "object",
                        "title": "vodafone.error.address.not-match",
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
                    "vodafone.error.internal": {
                        "type": "object",
                        "title": "vodafone.error.internal",
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
                    "vodafone.error.non-typified": {
                        "type": "object",
                        "title": "vodafone.error.non-typified",
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
                    "vodafone.error.broadband.unavailable": {
                        "type": "object",
                        "title": "vodafone.error.broadband.unavailable",
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
                    "vodafone.error.system": {
                        "type": "object",
                        "title": "vodafone.error.system",
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
                    "vodafone.error.packages.not-retrieved": {
                        "type": "object",
                        "title": "vodafone.error.packages.not-retrieved",
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
                    "vodafone.error.broadband.multiple-lines": {
                        "type": "object",
                        "title": "vodafone.error.broadband.multiple-lines",
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
                    "error.no-addresses-found": {
                        "type": "object",
                        "title": "error.no-addresses-found",
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
            "warnings": {
                "type": "object",
                "title": "warnings",
                "properties": {
                    "vodafone.warning.installation.new-line": {
                        "type": "object",
                        "title": "vodafone.warning.installation.new-line",
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
                    "vodafone.warning.installation.new-number": {
                        "type": "object",
                        "title": "vodafone.warning.installation.new-number",
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
            "infos": {
                "type": "object",
                "title": "infos",
                "properties": {
                    "info.default": {
                        "type": "object",
                        "title": "info.default",
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
                    "virgin.media.broadband.info": {
                        "type": "object",
                        "title": "virgin.media.broadband.info",
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
                    "adsl.no-speed-details.info": {
                        "type": "object",
                        "title": "adsl.no-speed-details.info",
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
            "broadbandTechonology": {
                "type": "object",
                "title": "broadbandTechonology",
                "properties": {
                    "value": {
                        "type": "object",
                        "title": "value",
                        "properties": {
                            "ADSL": {
                                "type": "number",
                                "title": "ADSL"
                            },
                            "Fibre": {
                                "type": "number",
                                "title": "Fibre"
                            }
                        }
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
        "mainProvider": {
            "value": "Vodafone",
            "type": "String",
            "description": "name/id of the main provider to be whos information will be displayed in the card"
        },
        "loadingMessage": {
            "value": "Retrieving results from Vodafone portal...",
            "type": "String",
            "description": "Message displayed while results for the main provider are being loaded"
        },
        "addressesChecker": {
            "timeout": {
                "value": 50000,
                "type": "Number",
                "description": "The number of milliseconds to wait for the response to the checker request"
            }
        },
        "addressesFinder": {
            "provider": {
                "value": "gb",
                "type": "string",
                "description": "The provider to retrieve addresses from."
            }
        },
        "errors": {
            "error.default": {
                "value": "Internal checker error",
                "type": "string",
                "description": ""
            },
            "error.timeout": {
                "value": "A timeout occurred while checking for availability",
                "type": "string",
                "description": ""
            },
            "error.cannot-estimate-speed": {
                "value": "It was not possible to obtain an accurate broadband speed reading online.",
                "type": "string",
                "description": ""
            },
            "vodafone.error.broadband.cannot-estimate-speed": {
                "value": "It was not possible to obtain an accurate broadband speed reading online.",
                "type": "string",
                "description": ""
            },
            "vodafone.error.phone.landline.invalid": {
                "value": "Invalid landline number",
                "type": "string",
                "description": ""
            },
            "vodafone.error.address.not-match": {
                "value": "Customer address did not match any address in list",
                "type": "string",
                "description": ""
            },
            "vodafone.error.internal": {
                "value": "Internal checker error",
                "type": "string",
                "description": ""
            },
            "vodafone.error.non-typified": {
                "value": "Internal checker error",
                "type": "string",
                "description": ""
            },
            "vodafone.error.broadband.unavailable": {
                "value": "Broadband is not available",
                "type": "string",
                "description": ""
            },
            "vodafone.error.system": {
                "value": "Vodafone portal internal error",
                "type": "string",
                "description": ""
            },
            "vodafone.error.packages.not-retrieved": {
                "value": "It was not possible to obtain an accurate broadband speed reading online.",
                "type": "string",
                "description": ""
            },
            "vodafone.error.broadband.multiple-lines": {
                "value": "We could not obtain a speed because there was more than one line found at the property",
                "type": "string",
                "description": ""
            },
            "error.no-addresses-found": {
                "value": "No addresses found.",
                "type": "string",
                "description": "No addresses were found for the given postcode."
            }
        },
        "warnings": {
            "vodafone.warning.installation.new-line": {
                "value": "WARNING: the customer will need a new line and new number. A connection charge has been added to the price.",
                "type": "string",
                "description": ""
            },
            "vodafone.warning.installation.new-number": {
                "value": "Customer needs a new number (unable to keep your existing number)",
                "type": "string",
                "description": ""
            }
        },
        "infos": {
            "info.default": {
                "value": "The speed range shown is Vodafone's estimate of the download and upload speeds the customer could get. The minimum guaranteed speed shown is the slowest speed Vodafone thinks the line will achieve.",
                "type": "string",
                "description": ""
            },
            "virgin.media.broadband.info": {
                "value": "Please note: we won't be able to cancel Virgin broadband and phone services on behalf of the customer. They should contact Virgin themselves to cancel their existing service once we've confirmed the order.",
                "type": "string",
                "description": ""
            },
            "adsl.no-speed-details.info": {
                "value": "Not displayed on Vodafone portal.",
                "type": "string",
                "description": ""
            }
        },
        "broadbandTechonology": {
            "value": {
                "ADSL": 1,
                "Fibre": 2
            },
            "type": "Array",
            "description": "List of broadband technologies available (Fibre/ADSL) and it's indexed id"
        }
    }
}
export default sdBroadbandAvailabilityCardConfig;