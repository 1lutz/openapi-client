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
exports.GetCoverageFormatToJSON = exports.GetCoverageFormatFromJSONTyped = exports.GetCoverageFormatFromJSON = exports.GetCoverageFormat = void 0;
/**
 *
 * @export
 */
exports.GetCoverageFormat = {
    ImageTiff: 'image/tiff'
};
function GetCoverageFormatFromJSON(json) {
    return GetCoverageFormatFromJSONTyped(json, false);
}
exports.GetCoverageFormatFromJSON = GetCoverageFormatFromJSON;
function GetCoverageFormatFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.GetCoverageFormatFromJSONTyped = GetCoverageFormatFromJSONTyped;
function GetCoverageFormatToJSON(value) {
    return value;
}
exports.GetCoverageFormatToJSON = GetCoverageFormatToJSON;