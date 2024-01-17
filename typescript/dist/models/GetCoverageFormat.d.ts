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
export declare const GetCoverageFormat: {
    readonly ImageTiff: "image/tiff";
};
export type GetCoverageFormat = typeof GetCoverageFormat[keyof typeof GetCoverageFormat];
export declare function GetCoverageFormatFromJSON(json: any): GetCoverageFormat;
export declare function GetCoverageFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCoverageFormat;
export declare function GetCoverageFormatToJSON(value?: GetCoverageFormat | null): any;