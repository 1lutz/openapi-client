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
 * @interface MeasurementClassification
 */
export interface MeasurementClassification {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MeasurementClassification
     */
    classes: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof MeasurementClassification
     */
    measurement: string;
    /**
     * 
     * @type {string}
     * @memberof MeasurementClassification
     */
    type: MeasurementClassificationTypeEnum;
}


/**
 * @export
 */
export const MeasurementClassificationTypeEnum = {
    Classification: 'classification'
} as const;
export type MeasurementClassificationTypeEnum = typeof MeasurementClassificationTypeEnum[keyof typeof MeasurementClassificationTypeEnum];


/**
 * Check if a given object implements the MeasurementClassification interface.
 */
export function instanceOfMeasurementClassification(value: object): value is MeasurementClassification {
    if (!('classes' in value) || value['classes'] === undefined) return false;
    if (!('measurement' in value) || value['measurement'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function MeasurementClassificationFromJSON(json: any): MeasurementClassification {
    return MeasurementClassificationFromJSONTyped(json, false);
}

export function MeasurementClassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasurementClassification {
    if (json == null) {
        return json;
    }
    return {
        
        'classes': json['classes'],
        'measurement': json['measurement'],
        'type': json['type'],
    };
}

export function MeasurementClassificationToJSON(value?: MeasurementClassification | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'classes': value['classes'],
        'measurement': value['measurement'],
        'type': value['type'],
    };
}
