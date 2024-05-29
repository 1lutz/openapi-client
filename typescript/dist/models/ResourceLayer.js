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
exports.ResourceLayerToJSON = exports.ResourceLayerFromJSONTyped = exports.ResourceLayerFromJSON = exports.instanceOfResourceLayer = exports.ResourceLayerTypeEnum = void 0;
/**
 * @export
 */
exports.ResourceLayerTypeEnum = {
    Layer: 'layer'
};
/**
 * Check if a given object implements the ResourceLayer interface.
 */
function instanceOfResourceLayer(value) {
    if (!('id' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfResourceLayer = instanceOfResourceLayer;
function ResourceLayerFromJSON(json) {
    return ResourceLayerFromJSONTyped(json, false);
}
exports.ResourceLayerFromJSON = ResourceLayerFromJSON;
function ResourceLayerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
exports.ResourceLayerFromJSONTyped = ResourceLayerFromJSONTyped;
function ResourceLayerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
exports.ResourceLayerToJSON = ResourceLayerToJSON;