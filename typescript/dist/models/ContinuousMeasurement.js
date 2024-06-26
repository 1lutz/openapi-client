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
exports.ContinuousMeasurementToJSON = exports.ContinuousMeasurementFromJSONTyped = exports.ContinuousMeasurementFromJSON = exports.instanceOfContinuousMeasurement = exports.ContinuousMeasurementTypeEnum = void 0;
/**
 * @export
 */
exports.ContinuousMeasurementTypeEnum = {
    Continuous: 'continuous'
};
/**
 * Check if a given object implements the ContinuousMeasurement interface.
 */
function instanceOfContinuousMeasurement(value) {
    if (!('measurement' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfContinuousMeasurement = instanceOfContinuousMeasurement;
function ContinuousMeasurementFromJSON(json) {
    return ContinuousMeasurementFromJSONTyped(json, false);
}
exports.ContinuousMeasurementFromJSON = ContinuousMeasurementFromJSON;
function ContinuousMeasurementFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'measurement': json['measurement'],
        'type': json['type'],
        'unit': json['unit'] == null ? undefined : json['unit'],
    };
}
exports.ContinuousMeasurementFromJSONTyped = ContinuousMeasurementFromJSONTyped;
function ContinuousMeasurementToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'measurement': value['measurement'],
        'type': value['type'],
        'unit': value['unit'],
    };
}
exports.ContinuousMeasurementToJSON = ContinuousMeasurementToJSON;
