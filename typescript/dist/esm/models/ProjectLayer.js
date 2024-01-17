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
import { LayerVisibilityFromJSON, LayerVisibilityToJSON, } from './LayerVisibility';
import { SymbologyFromJSON, SymbologyToJSON, } from './Symbology';
/**
 * Check if a given object implements the ProjectLayer interface.
 */
export function instanceOfProjectLayer(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbology" in value;
    isInstance = isInstance && "visibility" in value;
    isInstance = isInstance && "workflow" in value;
    return isInstance;
}
export function ProjectLayerFromJSON(json) {
    return ProjectLayerFromJSONTyped(json, false);
}
export function ProjectLayerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'symbology': SymbologyFromJSON(json['symbology']),
        'visibility': LayerVisibilityFromJSON(json['visibility']),
        'workflow': json['workflow'],
    };
}
export function ProjectLayerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'symbology': SymbologyToJSON(value.symbology),
        'visibility': LayerVisibilityToJSON(value.visibility),
        'workflow': value.workflow,
    };
}