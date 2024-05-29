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
exports.ResourceIdDatasetIdToJSON = exports.ResourceIdDatasetIdFromJSONTyped = exports.ResourceIdDatasetIdFromJSON = exports.instanceOfResourceIdDatasetId = exports.ResourceIdDatasetIdTypeEnum = void 0;
/**
 * @export
 */
exports.ResourceIdDatasetIdTypeEnum = {
    DatasetId: 'DatasetId'
};
/**
 * Check if a given object implements the ResourceIdDatasetId interface.
 */
function instanceOfResourceIdDatasetId(value) {
    if (!('id' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfResourceIdDatasetId = instanceOfResourceIdDatasetId;
function ResourceIdDatasetIdFromJSON(json) {
    return ResourceIdDatasetIdFromJSONTyped(json, false);
}
exports.ResourceIdDatasetIdFromJSON = ResourceIdDatasetIdFromJSON;
function ResourceIdDatasetIdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
exports.ResourceIdDatasetIdFromJSONTyped = ResourceIdDatasetIdFromJSONTyped;
function ResourceIdDatasetIdToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
exports.ResourceIdDatasetIdToJSON = ResourceIdDatasetIdToJSON;