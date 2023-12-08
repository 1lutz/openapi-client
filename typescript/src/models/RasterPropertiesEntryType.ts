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
export const RasterPropertiesEntryType = {
    Number: 'Number',
    String: 'String'
} as const;
export type RasterPropertiesEntryType = typeof RasterPropertiesEntryType[keyof typeof RasterPropertiesEntryType];


export function RasterPropertiesEntryTypeFromJSON(json: any): RasterPropertiesEntryType {
    return RasterPropertiesEntryTypeFromJSONTyped(json, false);
}

export function RasterPropertiesEntryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterPropertiesEntryType {
    return json as RasterPropertiesEntryType;
}

export function RasterPropertiesEntryTypeToJSON(value?: RasterPropertiesEntryType | null): any {
    return value as any;
}

