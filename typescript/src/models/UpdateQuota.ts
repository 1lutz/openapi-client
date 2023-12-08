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
 * @interface UpdateQuota
 */
export interface UpdateQuota {
    /**
     * 
     * @type {number}
     * @memberof UpdateQuota
     */
    available: number;
}

/**
 * Check if a given object implements the UpdateQuota interface.
 */
export function instanceOfUpdateQuota(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "available" in value;

    return isInstance;
}

export function UpdateQuotaFromJSON(json: any): UpdateQuota {
    return UpdateQuotaFromJSONTyped(json, false);
}

export function UpdateQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateQuota {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available': json['available'],
    };
}

export function UpdateQuotaToJSON(value?: UpdateQuota | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available': value.available,
    };
}

