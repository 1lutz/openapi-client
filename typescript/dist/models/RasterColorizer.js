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
exports.RasterColorizerToJSON = exports.RasterColorizerFromJSONTyped = exports.RasterColorizerFromJSON = void 0;
const RasterColorizerSingleBand_1 = require("./RasterColorizerSingleBand");
function RasterColorizerFromJSON(json) {
    return RasterColorizerFromJSONTyped(json, false);
}
exports.RasterColorizerFromJSON = RasterColorizerFromJSON;
function RasterColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'singleBand':
            return Object.assign(Object.assign({}, (0, RasterColorizerSingleBand_1.RasterColorizerSingleBandFromJSONTyped)(json, true)), { type: 'singleBand' });
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${json['type']}'`);
    }
}
exports.RasterColorizerFromJSONTyped = RasterColorizerFromJSONTyped;
function RasterColorizerToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'singleBand':
            return (0, RasterColorizerSingleBand_1.RasterColorizerSingleBandToJSON)(value);
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${value['type']}'`);
    }
}
exports.RasterColorizerToJSON = RasterColorizerToJSON;
