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


/**
 * 
 * @export
 */
export const GetCoverageRequest = {
    GetCoverage: 'GetCoverage'
} as const;
export type GetCoverageRequest = typeof GetCoverageRequest[keyof typeof GetCoverageRequest];


export function GetCoverageRequestFromJSON(json: any): GetCoverageRequest {
    return GetCoverageRequestFromJSONTyped(json, false);
}

export function GetCoverageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCoverageRequest {
    return json as GetCoverageRequest;
}

export function GetCoverageRequestToJSON(value?: GetCoverageRequest | null): any {
    return value as any;
}

