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
export declare const WmsVersion: {
    readonly _130: "1.3.0";
};
export type WmsVersion = typeof WmsVersion[keyof typeof WmsVersion];
export declare function WmsVersionFromJSON(json: any): WmsVersion;
export declare function WmsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WmsVersion;
export declare function WmsVersionToJSON(value?: WmsVersion | null): any;