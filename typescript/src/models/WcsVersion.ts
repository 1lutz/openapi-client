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


/**
 * 
 * @export
 */
export const WcsVersion = {
    _0: '1.1.0',
    _1: '1.1.1'
} as const;
export type WcsVersion = typeof WcsVersion[keyof typeof WcsVersion];


export function WcsVersionFromJSON(json: any): WcsVersion {
    return WcsVersionFromJSONTyped(json, false);
}

export function WcsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WcsVersion {
    return json as WcsVersion;
}

export function WcsVersionToJSON(value?: WcsVersion | null): any {
    return value as any;
}

