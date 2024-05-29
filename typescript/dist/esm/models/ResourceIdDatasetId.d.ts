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
 * @interface ResourceIdDatasetId
 */
export interface ResourceIdDatasetId {
    /**
     *
     * @type {string}
     * @memberof ResourceIdDatasetId
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResourceIdDatasetId
     */
    type: ResourceIdDatasetIdTypeEnum;
}
/**
 * @export
 */
export declare const ResourceIdDatasetIdTypeEnum: {
    readonly DatasetId: "DatasetId";
};
export type ResourceIdDatasetIdTypeEnum = typeof ResourceIdDatasetIdTypeEnum[keyof typeof ResourceIdDatasetIdTypeEnum];
/**
 * Check if a given object implements the ResourceIdDatasetId interface.
 */
export declare function instanceOfResourceIdDatasetId(value: object): boolean;
export declare function ResourceIdDatasetIdFromJSON(json: any): ResourceIdDatasetId;
export declare function ResourceIdDatasetIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdDatasetId;
export declare function ResourceIdDatasetIdToJSON(value?: ResourceIdDatasetId | null): any;
