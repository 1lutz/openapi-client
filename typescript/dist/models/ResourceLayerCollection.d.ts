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
 * @interface ResourceLayerCollection
 */
export interface ResourceLayerCollection {
    /**
     *
     * @type {string}
     * @memberof ResourceLayerCollection
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResourceLayerCollection
     */
    type: ResourceLayerCollectionTypeEnum;
}
/**
 * @export
 */
export declare const ResourceLayerCollectionTypeEnum: {
    readonly LayerCollection: "layerCollection";
};
export type ResourceLayerCollectionTypeEnum = typeof ResourceLayerCollectionTypeEnum[keyof typeof ResourceLayerCollectionTypeEnum];
/**
 * Check if a given object implements the ResourceLayerCollection interface.
 */
export declare function instanceOfResourceLayerCollection(value: object): boolean;
export declare function ResourceLayerCollectionFromJSON(json: any): ResourceLayerCollection;
export declare function ResourceLayerCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceLayerCollection;
export declare function ResourceLayerCollectionToJSON(value?: ResourceLayerCollection | null): any;
