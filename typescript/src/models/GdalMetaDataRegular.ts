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
import type { GdalDatasetParameters } from './GdalDatasetParameters';
import {
    GdalDatasetParametersFromJSON,
    GdalDatasetParametersFromJSONTyped,
    GdalDatasetParametersToJSON,
} from './GdalDatasetParameters';
import type { GdalSourceTimePlaceholder } from './GdalSourceTimePlaceholder';
import {
    GdalSourceTimePlaceholderFromJSON,
    GdalSourceTimePlaceholderFromJSONTyped,
    GdalSourceTimePlaceholderToJSON,
} from './GdalSourceTimePlaceholder';
import type { RasterResultDescriptor } from './RasterResultDescriptor';
import {
    RasterResultDescriptorFromJSON,
    RasterResultDescriptorFromJSONTyped,
    RasterResultDescriptorToJSON,
} from './RasterResultDescriptor';
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './TimeInterval';
import type { TimeStep } from './TimeStep';
import {
    TimeStepFromJSON,
    TimeStepFromJSONTyped,
    TimeStepToJSON,
} from './TimeStep';

/**
 * 
 * @export
 * @interface GdalMetaDataRegular
 */
export interface GdalMetaDataRegular {
    /**
     * 
     * @type {number}
     * @memberof GdalMetaDataRegular
     */
    cacheTtl?: number;
    /**
     * 
     * @type {TimeInterval}
     * @memberof GdalMetaDataRegular
     */
    dataTime: TimeInterval;
    /**
     * 
     * @type {GdalDatasetParameters}
     * @memberof GdalMetaDataRegular
     */
    params: GdalDatasetParameters;
    /**
     * 
     * @type {RasterResultDescriptor}
     * @memberof GdalMetaDataRegular
     */
    resultDescriptor: RasterResultDescriptor;
    /**
     * 
     * @type {TimeStep}
     * @memberof GdalMetaDataRegular
     */
    step: TimeStep;
    /**
     * 
     * @type {{ [key: string]: GdalSourceTimePlaceholder; }}
     * @memberof GdalMetaDataRegular
     */
    timePlaceholders: { [key: string]: GdalSourceTimePlaceholder; };
    /**
     * 
     * @type {string}
     * @memberof GdalMetaDataRegular
     */
    type: GdalMetaDataRegularTypeEnum;
}


/**
 * @export
 */
export const GdalMetaDataRegularTypeEnum = {
    GdalMetaDataRegular: 'GdalMetaDataRegular'
} as const;
export type GdalMetaDataRegularTypeEnum = typeof GdalMetaDataRegularTypeEnum[keyof typeof GdalMetaDataRegularTypeEnum];


/**
 * Check if a given object implements the GdalMetaDataRegular interface.
 */
export function instanceOfGdalMetaDataRegular(value: object): boolean {
    if (!('dataTime' in value)) return false;
    if (!('params' in value)) return false;
    if (!('resultDescriptor' in value)) return false;
    if (!('step' in value)) return false;
    if (!('timePlaceholders' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function GdalMetaDataRegularFromJSON(json: any): GdalMetaDataRegular {
    return GdalMetaDataRegularFromJSONTyped(json, false);
}

export function GdalMetaDataRegularFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalMetaDataRegular {
    if (json == null) {
        return json;
    }
    return {
        
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'dataTime': TimeIntervalFromJSON(json['dataTime']),
        'params': GdalDatasetParametersFromJSON(json['params']),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'step': TimeStepFromJSON(json['step']),
        'timePlaceholders': (mapValues(json['timePlaceholders'], GdalSourceTimePlaceholderFromJSON)),
        'type': json['type'],
    };
}

export function GdalMetaDataRegularToJSON(value?: GdalMetaDataRegular | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cacheTtl': value['cacheTtl'],
        'dataTime': TimeIntervalToJSON(value['dataTime']),
        'params': GdalDatasetParametersToJSON(value['params']),
        'resultDescriptor': RasterResultDescriptorToJSON(value['resultDescriptor']),
        'step': TimeStepToJSON(value['step']),
        'timePlaceholders': (mapValues(value['timePlaceholders'], GdalSourceTimePlaceholderToJSON)),
        'type': value['type'],
    };
}

