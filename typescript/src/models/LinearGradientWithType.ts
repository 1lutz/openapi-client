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
import type { Breakpoint } from './Breakpoint';
import {
    BreakpointFromJSON,
    BreakpointFromJSONTyped,
    BreakpointToJSON,
} from './Breakpoint';

/**
 * 
 * @export
 * @interface LinearGradientWithType
 */
export interface LinearGradientWithType {
    /**
     * 
     * @type {Array<Breakpoint>}
     * @memberof LinearGradientWithType
     */
    breakpoints: Array<Breakpoint>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LinearGradientWithType
     */
    noDataColor: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LinearGradientWithType
     */
    overColor: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof LinearGradientWithType
     */
    type: LinearGradientWithTypeTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof LinearGradientWithType
     */
    underColor: Array<number>;
}


/**
 * @export
 */
export const LinearGradientWithTypeTypeEnum = {
    LinearGradient: 'linearGradient',
    LogarithmicGradient: 'logarithmicGradient',
    Palette: 'palette',
    Rgba: 'rgba'
} as const;
export type LinearGradientWithTypeTypeEnum = typeof LinearGradientWithTypeTypeEnum[keyof typeof LinearGradientWithTypeTypeEnum];


/**
 * Check if a given object implements the LinearGradientWithType interface.
 */
export function instanceOfLinearGradientWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "breakpoints" in value;
    isInstance = isInstance && "noDataColor" in value;
    isInstance = isInstance && "overColor" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "underColor" in value;

    return isInstance;
}

export function LinearGradientWithTypeFromJSON(json: any): LinearGradientWithType {
    return LinearGradientWithTypeFromJSONTyped(json, false);
}

export function LinearGradientWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinearGradientWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'breakpoints': ((json['breakpoints'] as Array<any>).map(BreakpointFromJSON)),
        'noDataColor': json['noDataColor'],
        'overColor': json['overColor'],
        'type': json['type'],
        'underColor': json['underColor'],
    };
}

export function LinearGradientWithTypeToJSON(value?: LinearGradientWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'breakpoints': ((value.breakpoints as Array<any>).map(BreakpointToJSON)),
        'noDataColor': value.noDataColor,
        'overColor': value.overColor,
        'type': value.type,
        'underColor': value.underColor,
    };
}

