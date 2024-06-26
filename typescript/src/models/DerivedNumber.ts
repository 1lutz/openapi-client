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
 * @interface DerivedNumber
 */
export interface DerivedNumber {
    /**
     * 
     * @type {string}
     * @memberof DerivedNumber
     */
    attribute: string;
    /**
     * 
     * @type {number}
     * @memberof DerivedNumber
     */
    defaultValue: number;
    /**
     * 
     * @type {number}
     * @memberof DerivedNumber
     */
    factor: number;
    /**
     * 
     * @type {string}
     * @memberof DerivedNumber
     */
    type: DerivedNumberTypeEnum;
}


/**
 * @export
 */
export const DerivedNumberTypeEnum = {
    Derived: 'derived'
} as const;
export type DerivedNumberTypeEnum = typeof DerivedNumberTypeEnum[keyof typeof DerivedNumberTypeEnum];


/**
 * Check if a given object implements the DerivedNumber interface.
 */
export function instanceOfDerivedNumber(value: object): boolean {
    if (!('attribute' in value)) return false;
    if (!('defaultValue' in value)) return false;
    if (!('factor' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function DerivedNumberFromJSON(json: any): DerivedNumber {
    return DerivedNumberFromJSONTyped(json, false);
}

export function DerivedNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): DerivedNumber {
    if (json == null) {
        return json;
    }
    return {
        
        'attribute': json['attribute'],
        'defaultValue': json['defaultValue'],
        'factor': json['factor'],
        'type': json['type'],
    };
}

export function DerivedNumberToJSON(value?: DerivedNumber | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attribute': value['attribute'],
        'defaultValue': value['defaultValue'],
        'factor': value['factor'],
        'type': value['type'],
    };
}

