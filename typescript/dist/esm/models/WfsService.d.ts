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
export declare const WfsService: {
    readonly Wfs: "WFS";
};
export type WfsService = typeof WfsService[keyof typeof WfsService];
export declare function WfsServiceFromJSON(json: any): WfsService;
export declare function WfsServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WfsService;
export declare function WfsServiceToJSON(value?: WfsService | null): any;
