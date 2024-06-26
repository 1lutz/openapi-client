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
import type { RasterQueryRectangle } from './RasterQueryRectangle';
import {
    RasterQueryRectangleFromJSON,
    RasterQueryRectangleFromJSONTyped,
    RasterQueryRectangleToJSON,
} from './RasterQueryRectangle';

/**
 * parameter for the dataset from workflow handler (body)
 * @export
 * @interface RasterDatasetFromWorkflow
 */
export interface RasterDatasetFromWorkflow {
    /**
     * 
     * @type {boolean}
     * @memberof RasterDatasetFromWorkflow
     */
    asCog?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RasterDatasetFromWorkflow
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof RasterDatasetFromWorkflow
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof RasterDatasetFromWorkflow
     */
    name?: string;
    /**
     * 
     * @type {RasterQueryRectangle}
     * @memberof RasterDatasetFromWorkflow
     */
    query: RasterQueryRectangle;
}

/**
 * Check if a given object implements the RasterDatasetFromWorkflow interface.
 */
export function instanceOfRasterDatasetFromWorkflow(value: object): boolean {
    if (!('displayName' in value)) return false;
    if (!('query' in value)) return false;
    return true;
}

export function RasterDatasetFromWorkflowFromJSON(json: any): RasterDatasetFromWorkflow {
    return RasterDatasetFromWorkflowFromJSONTyped(json, false);
}

export function RasterDatasetFromWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterDatasetFromWorkflow {
    if (json == null) {
        return json;
    }
    return {
        
        'asCog': json['asCog'] == null ? undefined : json['asCog'],
        'description': json['description'] == null ? undefined : json['description'],
        'displayName': json['displayName'],
        'name': json['name'] == null ? undefined : json['name'],
        'query': RasterQueryRectangleFromJSON(json['query']),
    };
}

export function RasterDatasetFromWorkflowToJSON(value?: RasterDatasetFromWorkflow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'asCog': value['asCog'],
        'description': value['description'],
        'displayName': value['displayName'],
        'name': value['name'],
        'query': RasterQueryRectangleToJSON(value['query']),
    };
}

