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
 * Check if a given object implements the LayerVisibility interface.
 */
export function instanceOfLayerVisibility(value) {
    if (!('data' in value))
        return false;
    if (!('legend' in value))
        return false;
    return true;
}
export function LayerVisibilityFromJSON(json) {
    return LayerVisibilityFromJSONTyped(json, false);
}
export function LayerVisibilityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'],
        'legend': json['legend'],
    };
}
export function LayerVisibilityToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'],
        'legend': value['legend'],
    };
}
