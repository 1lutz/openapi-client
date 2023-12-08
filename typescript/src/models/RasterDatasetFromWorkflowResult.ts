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
 * response of the dataset from workflow handler
 * @export
 * @interface RasterDatasetFromWorkflowResult
 */
export interface RasterDatasetFromWorkflowResult {
    /**
     * 
     * @type {string}
     * @memberof RasterDatasetFromWorkflowResult
     */
    dataset: string;
    /**
     * 
     * @type {string}
     * @memberof RasterDatasetFromWorkflowResult
     */
    upload: string;
}

/**
 * Check if a given object implements the RasterDatasetFromWorkflowResult interface.
 */
export function instanceOfRasterDatasetFromWorkflowResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dataset" in value;
    isInstance = isInstance && "upload" in value;

    return isInstance;
}

export function RasterDatasetFromWorkflowResultFromJSON(json: any): RasterDatasetFromWorkflowResult {
    return RasterDatasetFromWorkflowResultFromJSONTyped(json, false);
}

export function RasterDatasetFromWorkflowResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterDatasetFromWorkflowResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataset': json['dataset'],
        'upload': json['upload'],
    };
}

export function RasterDatasetFromWorkflowResultToJSON(value?: RasterDatasetFromWorkflowResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataset': value.dataset,
        'upload': value.upload,
    };
}

