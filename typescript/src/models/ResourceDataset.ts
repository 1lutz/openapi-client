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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ResourceDataset
 */
export interface ResourceDataset {
    /**
     * 
     * @type {string}
     * @memberof ResourceDataset
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceDataset
     */
    type: ResourceDatasetTypeEnum;
}


/**
 * @export
 */
export const ResourceDatasetTypeEnum = {
    Dataset: 'dataset'
} as const;
export type ResourceDatasetTypeEnum = typeof ResourceDatasetTypeEnum[keyof typeof ResourceDatasetTypeEnum];


/**
 * Check if a given object implements the ResourceDataset interface.
 */
export function instanceOfResourceDataset(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ResourceDatasetFromJSON(json: any): ResourceDataset {
    return ResourceDatasetFromJSONTyped(json, false);
}

export function ResourceDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceDataset {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ResourceDatasetToJSON(value?: ResourceDataset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': value['type'],
    };
}

