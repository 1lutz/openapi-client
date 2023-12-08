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
 * @interface LogarithmicGradientWithType
 */
export interface LogarithmicGradientWithType {
    /**
     * 
     * @type {Array<Breakpoint>}
     * @memberof LogarithmicGradientWithType
     */
    breakpoints: Array<Breakpoint>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LogarithmicGradientWithType
     */
    noDataColor: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof LogarithmicGradientWithType
     */
    overColor: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof LogarithmicGradientWithType
     */
    type: LogarithmicGradientWithTypeTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof LogarithmicGradientWithType
     */
    underColor: Array<number>;
}


/**
 * @export
 */
export const LogarithmicGradientWithTypeTypeEnum = {
    LogarithmicGradient: 'logarithmicGradient'
} as const;
export type LogarithmicGradientWithTypeTypeEnum = typeof LogarithmicGradientWithTypeTypeEnum[keyof typeof LogarithmicGradientWithTypeTypeEnum];


/**
 * Check if a given object implements the LogarithmicGradientWithType interface.
 */
export function instanceOfLogarithmicGradientWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "breakpoints" in value;
    isInstance = isInstance && "noDataColor" in value;
    isInstance = isInstance && "overColor" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "underColor" in value;

    return isInstance;
}

export function LogarithmicGradientWithTypeFromJSON(json: any): LogarithmicGradientWithType {
    return LogarithmicGradientWithTypeFromJSONTyped(json, false);
}

export function LogarithmicGradientWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogarithmicGradientWithType {
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

export function LogarithmicGradientWithTypeToJSON(value?: LogarithmicGradientWithType | null): any {
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

