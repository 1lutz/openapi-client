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
import type { VectorResultDescriptor } from './VectorResultDescriptor';
import {
    VectorResultDescriptorFromJSON,
    VectorResultDescriptorFromJSONTyped,
    VectorResultDescriptorToJSON,
} from './VectorResultDescriptor';
import type { MockDatasetDataSourceLoadingInfo } from './MockDatasetDataSourceLoadingInfo';
import {
    MockDatasetDataSourceLoadingInfoFromJSON,
    MockDatasetDataSourceLoadingInfoFromJSONTyped,
    MockDatasetDataSourceLoadingInfoToJSON,
} from './MockDatasetDataSourceLoadingInfo';

/**
 * 
 * @export
 * @interface MetaDataDefinitionMockMetaData
 */
export interface MetaDataDefinitionMockMetaData {
    /**
     * 
     * @type {MockDatasetDataSourceLoadingInfo}
     * @memberof MetaDataDefinitionMockMetaData
     */
    loadingInfo: MockDatasetDataSourceLoadingInfo;
    /**
     * 
     * @type {VectorResultDescriptor}
     * @memberof MetaDataDefinitionMockMetaData
     */
    resultDescriptor: VectorResultDescriptor;
    /**
     * 
     * @type {string}
     * @memberof MetaDataDefinitionMockMetaData
     */
    type: MetaDataDefinitionMockMetaDataTypeEnum;
}


/**
 * @export
 */
export const MetaDataDefinitionMockMetaDataTypeEnum = {
    MockMetaData: 'MockMetaData'
} as const;
export type MetaDataDefinitionMockMetaDataTypeEnum = typeof MetaDataDefinitionMockMetaDataTypeEnum[keyof typeof MetaDataDefinitionMockMetaDataTypeEnum];


/**
 * Check if a given object implements the MetaDataDefinitionMockMetaData interface.
 */
export function instanceOfMetaDataDefinitionMockMetaData(value: object): value is MetaDataDefinitionMockMetaData {
    if (!('loadingInfo' in value) || value['loadingInfo'] === undefined) return false;
    if (!('resultDescriptor' in value) || value['resultDescriptor'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function MetaDataDefinitionMockMetaDataFromJSON(json: any): MetaDataDefinitionMockMetaData {
    return MetaDataDefinitionMockMetaDataFromJSONTyped(json, false);
}

export function MetaDataDefinitionMockMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataDefinitionMockMetaData {
    if (json == null) {
        return json;
    }
    return {
        
        'loadingInfo': MockDatasetDataSourceLoadingInfoFromJSON(json['loadingInfo']),
        'resultDescriptor': VectorResultDescriptorFromJSON(json['resultDescriptor']),
        'type': json['type'],
    };
}

export function MetaDataDefinitionMockMetaDataToJSON(value?: MetaDataDefinitionMockMetaData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'loadingInfo': MockDatasetDataSourceLoadingInfoToJSON(value['loadingInfo']),
        'resultDescriptor': VectorResultDescriptorToJSON(value['resultDescriptor']),
        'type': value['type'],
    };
}
