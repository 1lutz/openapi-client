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
export declare const OrderBy: {
    readonly NameAsc: "NameAsc";
    readonly NameDesc: "NameDesc";
};
export type OrderBy = typeof OrderBy[keyof typeof OrderBy];
export declare function OrderByFromJSON(json: any): OrderBy;
export declare function OrderByFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderBy;
export declare function OrderByToJSON(value?: OrderBy | null): any;
