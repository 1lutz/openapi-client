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
export const GetCapabilitiesRequest = {
    GetCapabilities: 'GetCapabilities'
} as const;
export type GetCapabilitiesRequest = typeof GetCapabilitiesRequest[keyof typeof GetCapabilitiesRequest];


export function GetCapabilitiesRequestFromJSON(json: any): GetCapabilitiesRequest {
    return GetCapabilitiesRequestFromJSONTyped(json, false);
}

export function GetCapabilitiesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCapabilitiesRequest {
    return json as GetCapabilitiesRequest;
}

export function GetCapabilitiesRequestToJSON(value?: GetCapabilitiesRequest | null): any {
    return value as any;
}

