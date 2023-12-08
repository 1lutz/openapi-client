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
export const TimeReference = {
    Start: 'start',
    End: 'end'
} as const;
export type TimeReference = typeof TimeReference[keyof typeof TimeReference];


export function TimeReferenceFromJSON(json: any): TimeReference {
    return TimeReferenceFromJSONTyped(json, false);
}

export function TimeReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeReference {
    return json as TimeReference;
}

export function TimeReferenceToJSON(value?: TimeReference | null): any {
    return value as any;
}

