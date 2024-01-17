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
exports.BreakpointToJSON = exports.BreakpointFromJSONTyped = exports.BreakpointFromJSON = exports.instanceOfBreakpoint = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Breakpoint interface.
 */
function instanceOfBreakpoint(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBreakpoint = instanceOfBreakpoint;
function BreakpointFromJSON(json) {
    return BreakpointFromJSONTyped(json, false);
}
exports.BreakpointFromJSON = BreakpointFromJSON;
function BreakpointFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'color': !(0, runtime_1.exists)(json, 'color') ? undefined : json['color'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.BreakpointFromJSONTyped = BreakpointFromJSONTyped;
function BreakpointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'color': value.color,
        'value': value.value,
    };
}
exports.BreakpointToJSON = BreakpointToJSON;