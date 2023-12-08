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
export const GetMapExceptionFormat = {
    Xml: 'XML',
    Json: 'JSON'
} as const;
export type GetMapExceptionFormat = typeof GetMapExceptionFormat[keyof typeof GetMapExceptionFormat];


export function GetMapExceptionFormatFromJSON(json: any): GetMapExceptionFormat {
    return GetMapExceptionFormatFromJSONTyped(json, false);
}

export function GetMapExceptionFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMapExceptionFormat {
    return json as GetMapExceptionFormat;
}

export function GetMapExceptionFormatToJSON(value?: GetMapExceptionFormat | null): any {
    return value as any;
}

