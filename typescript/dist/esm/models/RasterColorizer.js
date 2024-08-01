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
import { SingleBandRasterColorizerFromJSONTyped, SingleBandRasterColorizerToJSON, } from './SingleBandRasterColorizer';
export function RasterColorizerFromJSON(json) {
    return RasterColorizerFromJSONTyped(json, false);
}
export function RasterColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'singleBand':
            return Object.assign(Object.assign({}, SingleBandRasterColorizerFromJSONTyped(json, true)), { type: 'singleBand' });
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${json['type']}'`);
    }
}
export function RasterColorizerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'singleBand':
            return SingleBandRasterColorizerToJSON(value);
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${value['type']}'`);
    }
}
