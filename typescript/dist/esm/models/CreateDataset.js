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
import { DataPathFromJSON, DataPathToJSON, } from './DataPath';
import { DatasetDefinitionFromJSON, DatasetDefinitionToJSON, } from './DatasetDefinition';
/**
 * Check if a given object implements the CreateDataset interface.
 */
export function instanceOfCreateDataset(value) {
    if (!('dataPath' in value))
        return false;
    if (!('definition' in value))
        return false;
    return true;
}
export function CreateDatasetFromJSON(json) {
    return CreateDatasetFromJSONTyped(json, false);
}
export function CreateDatasetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'dataPath': DataPathFromJSON(json['dataPath']),
        'definition': DatasetDefinitionFromJSON(json['definition']),
    };
}
export function CreateDatasetToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'dataPath': DataPathToJSON(value['dataPath']),
        'definition': DatasetDefinitionToJSON(value['definition']),
    };
}
