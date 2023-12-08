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
import type { OgrSourceTimeFormat } from './OgrSourceTimeFormat';
import {
    OgrSourceTimeFormatFromJSON,
    OgrSourceTimeFormatFromJSONTyped,
    OgrSourceTimeFormatToJSON,
} from './OgrSourceTimeFormat';

/**
 * 
 * @export
 * @interface StartEndOgrSourceDatasetTimeType
 */
export interface StartEndOgrSourceDatasetTimeType {
    /**
     * 
     * @type {string}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    endField: string;
    /**
     * 
     * @type {OgrSourceTimeFormat}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    endFormat: OgrSourceTimeFormat;
    /**
     * 
     * @type {string}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    startField: string;
    /**
     * 
     * @type {OgrSourceTimeFormat}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    startFormat: OgrSourceTimeFormat;
    /**
     * 
     * @type {string}
     * @memberof StartEndOgrSourceDatasetTimeType
     */
    type: StartEndOgrSourceDatasetTimeTypeTypeEnum;
}


/**
 * @export
 */
export const StartEndOgrSourceDatasetTimeTypeTypeEnum = {
    StartEnd: 'startEnd'
} as const;
export type StartEndOgrSourceDatasetTimeTypeTypeEnum = typeof StartEndOgrSourceDatasetTimeTypeTypeEnum[keyof typeof StartEndOgrSourceDatasetTimeTypeTypeEnum];


/**
 * Check if a given object implements the StartEndOgrSourceDatasetTimeType interface.
 */
export function instanceOfStartEndOgrSourceDatasetTimeType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "endField" in value;
    isInstance = isInstance && "endFormat" in value;
    isInstance = isInstance && "startField" in value;
    isInstance = isInstance && "startFormat" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function StartEndOgrSourceDatasetTimeTypeFromJSON(json: any): StartEndOgrSourceDatasetTimeType {
    return StartEndOgrSourceDatasetTimeTypeFromJSONTyped(json, false);
}

export function StartEndOgrSourceDatasetTimeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartEndOgrSourceDatasetTimeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endField': json['endField'],
        'endFormat': OgrSourceTimeFormatFromJSON(json['endFormat']),
        'startField': json['startField'],
        'startFormat': OgrSourceTimeFormatFromJSON(json['startFormat']),
        'type': json['type'],
    };
}

export function StartEndOgrSourceDatasetTimeTypeToJSON(value?: StartEndOgrSourceDatasetTimeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endField': value.endField,
        'endFormat': OgrSourceTimeFormatToJSON(value.endFormat),
        'startField': value.startField,
        'startFormat': OgrSourceTimeFormatToJSON(value.startFormat),
        'type': value.type,
    };
}
