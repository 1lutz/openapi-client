"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderLayerCollectionIdToJSON = exports.ProviderLayerCollectionIdFromJSONTyped = exports.ProviderLayerCollectionIdFromJSON = exports.instanceOfProviderLayerCollectionId = void 0;
/**
 * Check if a given object implements the ProviderLayerCollectionId interface.
 */
function instanceOfProviderLayerCollectionId(value) {
    let isInstance = true;
    isInstance = isInstance && "collectionId" in value;
    isInstance = isInstance && "providerId" in value;
    return isInstance;
}
exports.instanceOfProviderLayerCollectionId = instanceOfProviderLayerCollectionId;
function ProviderLayerCollectionIdFromJSON(json) {
    return ProviderLayerCollectionIdFromJSONTyped(json, false);
}
exports.ProviderLayerCollectionIdFromJSON = ProviderLayerCollectionIdFromJSON;
function ProviderLayerCollectionIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'collectionId': json['collectionId'],
        'providerId': json['providerId'],
    };
}
exports.ProviderLayerCollectionIdFromJSONTyped = ProviderLayerCollectionIdFromJSONTyped;
function ProviderLayerCollectionIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'collectionId': value.collectionId,
        'providerId': value.providerId,
    };
}
exports.ProviderLayerCollectionIdToJSON = ProviderLayerCollectionIdToJSON;