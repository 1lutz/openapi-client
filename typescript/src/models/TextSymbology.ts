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
import type { ColorParam } from './ColorParam';
import {
    ColorParamFromJSON,
    ColorParamFromJSONTyped,
    ColorParamToJSON,
} from './ColorParam';
import type { StrokeParam } from './StrokeParam';
import {
    StrokeParamFromJSON,
    StrokeParamFromJSONTyped,
    StrokeParamToJSON,
} from './StrokeParam';

/**
 * 
 * @export
 * @interface TextSymbology
 */
export interface TextSymbology {
    /**
     * 
     * @type {string}
     * @memberof TextSymbology
     */
    attribute: string;
    /**
     * 
     * @type {ColorParam}
     * @memberof TextSymbology
     */
    fillColor: ColorParam;
    /**
     * 
     * @type {StrokeParam}
     * @memberof TextSymbology
     */
    stroke: StrokeParam;
}

/**
 * Check if a given object implements the TextSymbology interface.
 */
export function instanceOfTextSymbology(value: object): boolean {
    if (!('attribute' in value)) return false;
    if (!('fillColor' in value)) return false;
    if (!('stroke' in value)) return false;
    return true;
}

export function TextSymbologyFromJSON(json: any): TextSymbology {
    return TextSymbologyFromJSONTyped(json, false);
}

export function TextSymbologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextSymbology {
    if (json == null) {
        return json;
    }
    return {
        
        'attribute': json['attribute'],
        'fillColor': ColorParamFromJSON(json['fillColor']),
        'stroke': StrokeParamFromJSON(json['stroke']),
    };
}

export function TextSymbologyToJSON(value?: TextSymbology | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attribute': value['attribute'],
        'fillColor': ColorParamToJSON(value['fillColor']),
        'stroke': StrokeParamToJSON(value['stroke']),
    };
}

