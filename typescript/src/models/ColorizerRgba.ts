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
 * @interface ColorizerRgba
 */
export interface ColorizerRgba {
    /**
     * 
     * @type {string}
     * @memberof ColorizerRgba
     */
    type: ColorizerRgbaTypeEnum;
}


/**
 * @export
 */
export const ColorizerRgbaTypeEnum = {
    Rgba: 'rgba'
} as const;
export type ColorizerRgbaTypeEnum = typeof ColorizerRgbaTypeEnum[keyof typeof ColorizerRgbaTypeEnum];


/**
 * Check if a given object implements the ColorizerRgba interface.
 */
export function instanceOfColorizerRgba(value: object): boolean {
    if (!('type' in value)) return false;
    return true;
}

export function ColorizerRgbaFromJSON(json: any): ColorizerRgba {
    return ColorizerRgbaFromJSONTyped(json, false);
}

export function ColorizerRgbaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorizerRgba {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function ColorizerRgbaToJSON(value?: ColorizerRgba | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
    };
}

