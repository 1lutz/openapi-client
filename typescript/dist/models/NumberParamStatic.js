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
exports.NumberParamStaticToJSON = exports.NumberParamStaticFromJSONTyped = exports.NumberParamStaticFromJSON = exports.instanceOfNumberParamStatic = exports.NumberParamStaticTypeEnum = void 0;
/**
 * @export
 */
exports.NumberParamStaticTypeEnum = {
    Static: 'static'
};
/**
 * Check if a given object implements the NumberParamStatic interface.
 */
function instanceOfNumberParamStatic(value) {
    if (!('type' in value))
        return false;
    if (!('value' in value))
        return false;
    return true;
}
exports.instanceOfNumberParamStatic = instanceOfNumberParamStatic;
function NumberParamStaticFromJSON(json) {
    return NumberParamStaticFromJSONTyped(json, false);
}
exports.NumberParamStaticFromJSON = NumberParamStaticFromJSON;
function NumberParamStaticFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'type': json['type'],
        'value': json['value'],
    };
}
exports.NumberParamStaticFromJSONTyped = NumberParamStaticFromJSONTyped;
function NumberParamStaticToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'type': value['type'],
        'value': value['value'],
    };
}
exports.NumberParamStaticToJSON = NumberParamStaticToJSON;
