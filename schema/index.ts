import app from "./app.config";
import applicationSearches from "./application-searches-config"
import bundleDetail from "./bundle-detail-config";
import bundleSummary from "./bundle-summary-config"
import client from "./client-configuration";
import endpoint from "./endpoint-config";
import extras from "./extras-config";
import features from "./features-configuration";
import genericContentService from "./generic-content-service.config";
import messages from "./messages-configuration";
import offersType from "./offers-type";
import packageModel from "./package-model-config";
import packageServicesDisplayOverride from "./package-services-display-override-config";
import packageState from "./package-state-config";
import providerProfileCard from "./provider-profile-card-config";
import recommendationSummary from "./recommendation-summary-config";
import reverseSearch from "./reverse-search-config";
import sdBasketItem from "./sd-basket-item.config";
import sdBroadbandAvailabilityCard from "./sd-broadband-availability-card.config";
import sdCardAvailabilityConstraint from "./sd-card-availability-constraint.config";
import sdHandsetRequirementsCard from "./sd-handset-requirements-card.config";
import sdProfiling from "./sd-profiling.config";
import searchConstraints from "./search-constraints-config";
import sorting from "./sorting-config";

export const schemas = {
  appConfig: app,
  applicationSearchesConfig: applicationSearches,
  bundleDetailConfig: bundleDetail,
  bundleSummaryConfig: bundleSummary,
  clientConfig: client,
  endpointConfig: endpoint,
  extrasConfig: extras,
  featuresConfig: features,
  genericContentServiceConfig: genericContentService,
  messagesConfig: messages,
  offersTypeConfig: offersType,
  packageModelConfig: packageModel,
  packageServicesDisplayOverrideConfig: packageServicesDisplayOverride,
  packageStateConfig: packageState,
  providerProfileCardConfig: providerProfileCard,
  recommendationSummaryConfig: recommendationSummary,
  reverseSearchConfig: reverseSearch,
  sdBasketItemConfig: sdBasketItem,
  sdBroadbandAvailabilityCardConfig: sdBroadbandAvailabilityCard,
  sdCardAvailabilityConstraintConfig: sdCardAvailabilityConstraint,
  sdHandsetRequirementsCardConfig: sdHandsetRequirementsCard,
  sdProfilingConfig :sdProfiling,
  searchConstraintsConfig: searchConstraints,
  sortingConfig: sorting
};
