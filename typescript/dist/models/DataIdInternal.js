"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataIdInternalToJSON = exports.DataIdInternalFromJSONTyped = exports.DataIdInternalFromJSON = exports.instanceOfDataIdInternal = exports.DataIdInternalTypeEnum = void 0;
/**
 * @export
 */
exports.DataIdInternalTypeEnum = {
    Internal: 'internal'
};
/**
 * Check if a given object implements the DataIdInternal interface.
 */
function instanceOfDataIdInternal(value) {
    if (!('datasetId' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfDataIdInternal = instanceOfDataIdInternal;
function DataIdInternalFromJSON(json) {
    return DataIdInternalFromJSONTyped(json, false);
}
exports.DataIdInternalFromJSON = DataIdInternalFromJSON;
function DataIdInternalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'datasetId': json['datasetId'],
        'type': json['type'],
    };
}
exports.DataIdInternalFromJSONTyped = DataIdInternalFromJSONTyped;
function DataIdInternalToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'datasetId': value['datasetId'],
        'type': value['type'],
    };
}
exports.DataIdInternalToJSON = DataIdInternalToJSON;
