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
 * @interface PolygonSymbologyWithType
 */
export interface PolygonSymbologyWithType {
    /**
     * 
     * @type {boolean}
     * @memberof PolygonSymbologyWithType
     */
    autoSimplified: boolean;
    /**
     * 
     * @type {ColorParam}
     * @memberof PolygonSymbologyWithType
     */
    fillColor: ColorParam;
    /**
     * 
     * @type {StrokeParam}
     * @memberof PolygonSymbologyWithType
     */
    stroke: StrokeParam;
    /**
     * 
     * @type {TextSymbology}
     * @memberof PolygonSymbologyWithType
     */
    text?: TextSymbology | null;
    /**
     * 
     * @type {string}
     * @memberof PolygonSymbologyWithType
     */
    type: PolygonSymbologyWithTypeTypeEnum;
}


/**
 * @export
 */
export const PolygonSymbologyWithTypeTypeEnum = {
    Polygon: 'polygon'
} as const;
export type PolygonSymbologyWithTypeTypeEnum = typeof PolygonSymbologyWithTypeTypeEnum[keyof typeof PolygonSymbologyWithTypeTypeEnum];


/**
 * Check if a given object implements the PolygonSymbologyWithType interface.
 */
export function instanceOfPolygonSymbologyWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "autoSimplified" in value;
    isInstance = isInstance && "fillColor" in value;
    isInstance = isInstance && "stroke" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function PolygonSymbologyWithTypeFromJSON(json: any): PolygonSymbologyWithType {
    return PolygonSymbologyWithTypeFromJSONTyped(json, false);
}

export function PolygonSymbologyWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolygonSymbologyWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoSimplified': json['autoSimplified'],
        'fillColor': ColorParamFromJSON(json['fillColor']),
        'stroke': StrokeParamFromJSON(json['stroke']),
        'text': !exists(json, 'text') ? undefined : TextSymbologyFromJSON(json['text']),
        'type': json['type'],
    };
}

export function PolygonSymbologyWithTypeToJSON(value?: PolygonSymbologyWithType | null): any {
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
        'type': value.type,
    };
}

