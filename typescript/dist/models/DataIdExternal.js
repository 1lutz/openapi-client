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
exports.DataIdExternalToJSON = exports.DataIdExternalFromJSONTyped = exports.DataIdExternalFromJSON = exports.instanceOfDataIdExternal = exports.DataIdExternalTypeEnum = void 0;
/**
 * @export
 */
exports.DataIdExternalTypeEnum = {
    External: 'external'
};
/**
 * Check if a given object implements the DataIdExternal interface.
 */
function instanceOfDataIdExternal(value) {
    if (!('layerId' in value))
        return false;
    if (!('providerId' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfDataIdExternal = instanceOfDataIdExternal;
function DataIdExternalFromJSON(json) {
    return DataIdExternalFromJSONTyped(json, false);
}
exports.DataIdExternalFromJSON = DataIdExternalFromJSON;
function DataIdExternalFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'layerId': json['layerId'],
        'providerId': json['providerId'],
        'type': json['type'],
    };
}
exports.DataIdExternalFromJSONTyped = DataIdExternalFromJSONTyped;
function DataIdExternalToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'layerId': value['layerId'],
        'providerId': value['providerId'],
        'type': value['type'],
    };
}
exports.DataIdExternalToJSON = DataIdExternalToJSON;