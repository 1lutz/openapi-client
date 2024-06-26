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
/**
 * @export
 */
export const ColorizerPaletteTypeEnum = {
    Palette: 'palette'
};
/**
 * Check if a given object implements the ColorizerPalette interface.
 */
export function instanceOfColorizerPalette(value) {
    if (!('colors' in value))
        return false;
    if (!('defaultColor' in value))
        return false;
    if (!('noDataColor' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function ColorizerPaletteFromJSON(json) {
    return ColorizerPaletteFromJSONTyped(json, false);
}
export function ColorizerPaletteFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'colors': json['colors'],
        'defaultColor': json['defaultColor'],
        'noDataColor': json['noDataColor'],
        'type': json['type'],
    };
}
export function ColorizerPaletteToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'colors': value['colors'],
        'defaultColor': value['defaultColor'],
        'noDataColor': value['noDataColor'],
        'type': value['type'],
    };
}
