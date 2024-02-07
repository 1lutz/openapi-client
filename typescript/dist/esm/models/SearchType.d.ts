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
export declare const SearchType: {
    readonly Fulltext: "fulltext";
    readonly Prefix: "prefix";
};
export type SearchType = typeof SearchType[keyof typeof SearchType];
export declare function SearchTypeFromJSON(json: any): SearchType;
export declare function SearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchType;
export declare function SearchTypeToJSON(value?: SearchType | null): any;
