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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateDatasetHandler200Response
 */
export interface CreateDatasetHandler200Response {
    /**
     * 
     * @type {string}
     * @memberof CreateDatasetHandler200Response
     */
    datasetName: string;
}

/**
 * Check if a given object implements the CreateDatasetHandler200Response interface.
 */
export function instanceOfCreateDatasetHandler200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "datasetName" in value;

    return isInstance;
}

export function CreateDatasetHandler200ResponseFromJSON(json: any): CreateDatasetHandler200Response {
    return CreateDatasetHandler200ResponseFromJSONTyped(json, false);
}

export function CreateDatasetHandler200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDatasetHandler200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datasetName': json['datasetName'],
    };
}

export function CreateDatasetHandler200ResponseToJSON(value?: CreateDatasetHandler200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'datasetName': value.datasetName,
    };
}

