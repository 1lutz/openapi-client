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
exports.ColorizerRgbaToJSON = exports.ColorizerRgbaFromJSONTyped = exports.ColorizerRgbaFromJSON = exports.instanceOfColorizerRgba = exports.ColorizerRgbaTypeEnum = void 0;
/**
 * @export
 */
exports.ColorizerRgbaTypeEnum = {
    Rgba: 'rgba'
};
/**
 * Check if a given object implements the ColorizerRgba interface.
 */
function instanceOfColorizerRgba(value) {
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfColorizerRgba = instanceOfColorizerRgba;
function ColorizerRgbaFromJSON(json) {
    return ColorizerRgbaFromJSONTyped(json, false);
}
exports.ColorizerRgbaFromJSON = ColorizerRgbaFromJSON;
function ColorizerRgbaFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
exports.ColorizerRgbaFromJSONTyped = ColorizerRgbaFromJSONTyped;
function ColorizerRgbaToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'type': value['type'],
    };
}
exports.ColorizerRgbaToJSON = ColorizerRgbaToJSON;
