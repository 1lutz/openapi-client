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
 * @interface LayerCollectionResource
 */
export interface LayerCollectionResource {
    /**
     *
     * @type {string}
     * @memberof LayerCollectionResource
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof LayerCollectionResource
     */
    type: LayerCollectionResourceTypeEnum;
}
/**
 * @export
 */
export declare const LayerCollectionResourceTypeEnum: {
    readonly LayerCollection: "layerCollection";
};
export type LayerCollectionResourceTypeEnum = typeof LayerCollectionResourceTypeEnum[keyof typeof LayerCollectionResourceTypeEnum];
/**
 * Check if a given object implements the LayerCollectionResource interface.
 */
export declare function instanceOfLayerCollectionResource(value: object): boolean;
export declare function LayerCollectionResourceFromJSON(json: any): LayerCollectionResource;
export declare function LayerCollectionResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollectionResource;
export declare function LayerCollectionResourceToJSON(value?: LayerCollectionResource | null): any;
