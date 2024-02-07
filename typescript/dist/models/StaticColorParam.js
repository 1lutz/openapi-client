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
exports.StaticColorParamToJSON = exports.StaticColorParamFromJSONTyped = exports.StaticColorParamFromJSON = exports.instanceOfStaticColorParam = exports.StaticColorParamTypeEnum = void 0;
/**
 * @export
 */
exports.StaticColorParamTypeEnum = {
    Static: 'static',
    Derived: 'derived'
};
/**
 * Check if a given object implements the StaticColorParam interface.
 */
function instanceOfStaticColorParam(value) {
    let isInstance = true;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfStaticColorParam = instanceOfStaticColorParam;
function StaticColorParamFromJSON(json) {
    return StaticColorParamFromJSONTyped(json, false);
}
exports.StaticColorParamFromJSON = StaticColorParamFromJSON;
function StaticColorParamFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'color': json['color'],
        'type': json['type'],
    };
}
exports.StaticColorParamFromJSONTyped = StaticColorParamFromJSONTyped;
function StaticColorParamToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'color': value.color,
        'type': value.type,
    };
}
exports.StaticColorParamToJSON = StaticColorParamToJSON;
