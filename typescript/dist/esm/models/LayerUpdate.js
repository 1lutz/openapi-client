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
import { instanceOfProjectLayer, ProjectLayerFromJSONTyped, ProjectLayerToJSON, } from './ProjectLayer';
import { instanceOfProjectUpdateToken, ProjectUpdateTokenFromJSONTyped, ProjectUpdateTokenToJSON, } from './ProjectUpdateToken';
export function LayerUpdateFromJSON(json) {
    return LayerUpdateFromJSONTyped(json, false);
}
export function LayerUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if (instanceOfProjectLayer(json)) {
        return ProjectLayerFromJSONTyped(json, true);
    }
    if (instanceOfProjectUpdateToken(json)) {
        return ProjectUpdateTokenFromJSONTyped(json, true);
    }
}
export function LayerUpdateToJSON(value) {
    if (value == null) {
        return value;
    }
    if (typeof value === 'object' && instanceOfProjectLayer(value)) {
        return ProjectLayerToJSON(value);
    }
    if (instanceOfProjectUpdateToken(value)) {
        return ProjectUpdateTokenToJSON(value);
    }
    return {};
}
