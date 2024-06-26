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
 * @interface AuthCodeRequestURL
 */
export interface AuthCodeRequestURL {
    /**
     * 
     * @type {string}
     * @memberof AuthCodeRequestURL
     */
    url: string;
}

/**
 * Check if a given object implements the AuthCodeRequestURL interface.
 */
export function instanceOfAuthCodeRequestURL(value: object): boolean {
    if (!('url' in value)) return false;
    return true;
}

export function AuthCodeRequestURLFromJSON(json: any): AuthCodeRequestURL {
    return AuthCodeRequestURLFromJSONTyped(json, false);
}

export function AuthCodeRequestURLFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthCodeRequestURL {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function AuthCodeRequestURLToJSON(value?: AuthCodeRequestURL | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
    };
}

