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
import { BreakpointFromJSON, BreakpointToJSON, } from './Breakpoint';
/**
 * @export
 */
export const LogarithmicGradientTypeEnum = {
    LogarithmicGradient: 'logarithmicGradient'
};
/**
 * Check if a given object implements the LogarithmicGradient interface.
 */
export function instanceOfLogarithmicGradient(value) {
    if (!('breakpoints' in value))
        return false;
    if (!('noDataColor' in value))
        return false;
    if (!('overColor' in value))
        return false;
    if (!('type' in value))
        return false;
    if (!('underColor' in value))
        return false;
    return true;
}
export function LogarithmicGradientFromJSON(json) {
    return LogarithmicGradientFromJSONTyped(json, false);
}
export function LogarithmicGradientFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'breakpoints': (json['breakpoints'].map(BreakpointFromJSON)),
        'noDataColor': json['noDataColor'],
        'overColor': json['overColor'],
        'type': json['type'],
        'underColor': json['underColor'],
    };
}
export function LogarithmicGradientToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'breakpoints': (value['breakpoints'].map(BreakpointToJSON)),
        'noDataColor': value['noDataColor'],
        'overColor': value['overColor'],
        'type': value['type'],
        'underColor': value['underColor'],
    };
}
