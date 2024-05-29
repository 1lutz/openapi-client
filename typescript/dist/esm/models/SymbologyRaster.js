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
import { RasterColorizerFromJSON, RasterColorizerToJSON, } from './RasterColorizer';
/**
 * @export
 */
export const SymbologyRasterTypeEnum = {
    Raster: 'raster'
};
/**
 * Check if a given object implements the SymbologyRaster interface.
 */
export function instanceOfSymbologyRaster(value) {
    if (!('opacity' in value))
        return false;
    if (!('rasterColorizer' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function SymbologyRasterFromJSON(json) {
    return SymbologyRasterFromJSONTyped(json, false);
}
export function SymbologyRasterFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'opacity': json['opacity'],
        'rasterColorizer': RasterColorizerFromJSON(json['rasterColorizer']),
        'type': json['type'],
    };
}
export function SymbologyRasterToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'opacity': value['opacity'],
        'rasterColorizer': RasterColorizerToJSON(value['rasterColorizer']),
        'type': value['type'],
    };
}
