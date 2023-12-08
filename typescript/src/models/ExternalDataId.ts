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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ExternalDataId
 */
export interface ExternalDataId {
    /**
     * 
     * @type {string}
     * @memberof ExternalDataId
     */
    layerId: string;
    /**
     * 
     * @type {string}
     * @memberof ExternalDataId
     */
    providerId: string;
}

/**
 * Check if a given object implements the ExternalDataId interface.
 */
export function instanceOfExternalDataId(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "layerId" in value;
    isInstance = isInstance && "providerId" in value;

    return isInstance;
}

export function ExternalDataIdFromJSON(json: any): ExternalDataId {
    return ExternalDataIdFromJSONTyped(json, false);
}

export function ExternalDataIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalDataId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'layerId': json['layerId'],
        'providerId': json['providerId'],
    };
}

export function ExternalDataIdToJSON(value?: ExternalDataId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'layerId': value.layerId,
        'providerId': value.providerId,
    };
}

