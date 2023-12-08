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
/**
 * 
 * @export
 * @interface RgbaColorizer
 */
export interface RgbaColorizer {
    /**
     * 
     * @type {string}
     * @memberof RgbaColorizer
     */
    type: RgbaColorizerTypeEnum;
}


/**
 * @export
 */
export const RgbaColorizerTypeEnum = {
    Rgba: 'rgba'
} as const;
export type RgbaColorizerTypeEnum = typeof RgbaColorizerTypeEnum[keyof typeof RgbaColorizerTypeEnum];


/**
 * Check if a given object implements the RgbaColorizer interface.
 */
export function instanceOfRgbaColorizer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function RgbaColorizerFromJSON(json: any): RgbaColorizer {
    return RgbaColorizerFromJSONTyped(json, false);
}

export function RgbaColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RgbaColorizer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function RgbaColorizerToJSON(value?: RgbaColorizer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}
