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

import { exists, mapValues } from '../runtime';
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
import type { TextSymbology } from './TextSymbology';
import {
    TextSymbologyFromJSON,
    TextSymbologyFromJSONTyped,
    TextSymbologyToJSON,
} from './TextSymbology';

/**
 * 
 * @export
 * @interface PolygonSymbology
 */
export interface PolygonSymbology {
    /**
     * 
     * @type {boolean}
     * @memberof PolygonSymbology
     */
    autoSimplified: boolean;
    /**
     * 
     * @type {ColorParam}
     * @memberof PolygonSymbology
     */
    fillColor: ColorParam;
    /**
     * 
     * @type {StrokeParam}
     * @memberof PolygonSymbology
     */
    stroke: StrokeParam;
    /**
     * 
     * @type {TextSymbology}
     * @memberof PolygonSymbology
     */
    text?: TextSymbology | null;
}

/**
 * Check if a given object implements the PolygonSymbology interface.
 */
export function instanceOfPolygonSymbology(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "autoSimplified" in value;
    isInstance = isInstance && "fillColor" in value;
    isInstance = isInstance && "stroke" in value;

    return isInstance;
}

export function PolygonSymbologyFromJSON(json: any): PolygonSymbology {
    return PolygonSymbologyFromJSONTyped(json, false);
}

export function PolygonSymbologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolygonSymbology {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoSimplified': json['autoSimplified'],
        'fillColor': ColorParamFromJSON(json['fillColor']),
        'stroke': StrokeParamFromJSON(json['stroke']),
        'text': !exists(json, 'text') ? undefined : TextSymbologyFromJSON(json['text']),
    };
}

export function PolygonSymbologyToJSON(value?: PolygonSymbology | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoSimplified': value.autoSimplified,
        'fillColor': ColorParamToJSON(value.fillColor),
        'stroke': StrokeParamToJSON(value.stroke),
        'text': TextSymbologyToJSON(value.text),
    };
}

