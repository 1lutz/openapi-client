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
export const GetCoverageFormat = {
    ImageTiff: 'image/tiff'
} as const;
export type GetCoverageFormat = typeof GetCoverageFormat[keyof typeof GetCoverageFormat];


export function GetCoverageFormatFromJSON(json: any): GetCoverageFormat {
    return GetCoverageFormatFromJSONTyped(json, false);
}

export function GetCoverageFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCoverageFormat {
    return json as GetCoverageFormat;
}

export function GetCoverageFormatToJSON(value?: GetCoverageFormat | null): any {
    return value as any;
}

