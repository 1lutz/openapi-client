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
 * @interface ResourceDataset
 */
export interface ResourceDataset {
    /**
     *
     * @type {string}
     * @memberof ResourceDataset
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResourceDataset
     */
    type: ResourceDatasetTypeEnum;
}
/**
 * @export
 */
export declare const ResourceDatasetTypeEnum: {
    readonly Dataset: "dataset";
};
export type ResourceDatasetTypeEnum = typeof ResourceDatasetTypeEnum[keyof typeof ResourceDatasetTypeEnum];
/**
 * Check if a given object implements the ResourceDataset interface.
 */
export declare function instanceOfResourceDataset(value: object): boolean;
export declare function ResourceDatasetFromJSON(json: any): ResourceDataset;
export declare function ResourceDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceDataset;
export declare function ResourceDatasetToJSON(value?: ResourceDataset | null): any;
