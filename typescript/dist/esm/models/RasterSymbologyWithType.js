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
export const RasterSymbologyWithTypeTypeEnum = {
    Raster: 'raster'
};
/**
 * Check if a given object implements the RasterSymbologyWithType interface.
 */
export function instanceOfRasterSymbologyWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "opacity" in value;
    isInstance = isInstance && "rasterColorizer" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function RasterSymbologyWithTypeFromJSON(json) {
    return RasterSymbologyWithTypeFromJSONTyped(json, false);
}
export function RasterSymbologyWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'opacity': json['opacity'],
        'rasterColorizer': RasterColorizerFromJSON(json['rasterColorizer']),
        'type': json['type'],
    };
}
export function RasterSymbologyWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'opacity': value.opacity,
        'rasterColorizer': RasterColorizerToJSON(value.rasterColorizer),
        'type': value.type,
    };
}
