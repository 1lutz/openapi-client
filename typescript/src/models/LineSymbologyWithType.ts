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
import type { StrokeParam } from './StrokeParam';
import {
    StrokeParamFromJSON,
    StrokeParamFromJSONTyped,
    StrokeParamToJSON,
} from './StrokeParam';
import type { TextSymbology } from './TextSymbology';
import {
    TextSymbologyFromJSON,
    TextSymbologyFromJSONTyped,
    TextSymbologyToJSON,
} from './TextSymbology';

/**
 * 
 * @export
 * @interface LineSymbologyWithType
 */
export interface LineSymbologyWithType {
    /**
     * 
     * @type {boolean}
     * @memberof LineSymbologyWithType
     */
    autoSimplified: boolean;
    /**
     * 
     * @type {StrokeParam}
     * @memberof LineSymbologyWithType
     */
    stroke: StrokeParam;
    /**
     * 
     * @type {TextSymbology}
     * @memberof LineSymbologyWithType
     */
    text?: TextSymbology | null;
    /**
     * 
     * @type {string}
     * @memberof LineSymbologyWithType
     */
    type: LineSymbologyWithTypeTypeEnum;
}


/**
 * @export
 */
export const LineSymbologyWithTypeTypeEnum = {
    Line: 'line'
} as const;
export type LineSymbologyWithTypeTypeEnum = typeof LineSymbologyWithTypeTypeEnum[keyof typeof LineSymbologyWithTypeTypeEnum];


/**
 * Check if a given object implements the LineSymbologyWithType interface.
 */
export function instanceOfLineSymbologyWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "autoSimplified" in value;
    isInstance = isInstance && "stroke" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function LineSymbologyWithTypeFromJSON(json: any): LineSymbologyWithType {
    return LineSymbologyWithTypeFromJSONTyped(json, false);
}

export function LineSymbologyWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineSymbologyWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoSimplified': json['autoSimplified'],
        'stroke': StrokeParamFromJSON(json['stroke']),
        'text': !exists(json, 'text') ? undefined : TextSymbologyFromJSON(json['text']),
        'type': json['type'],
    };
}

export function LineSymbologyWithTypeToJSON(value?: LineSymbologyWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoSimplified': value.autoSimplified,
        'stroke': StrokeParamToJSON(value.stroke),
        'text': TextSymbologyToJSON(value.text),
        'type': value.type,
    };
}

