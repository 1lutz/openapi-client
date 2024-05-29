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
import type { ProviderLayerId } from './ProviderLayerId';
/**
 *
 * @export
 * @interface CollectionItemLayer
 */
export interface CollectionItemLayer {
    /**
     *
     * @type {string}
     * @memberof CollectionItemLayer
     */
    description: string;
    /**
     *
     * @type {ProviderLayerId}
     * @memberof CollectionItemLayer
     */
    id: ProviderLayerId;
    /**
     *
     * @type {string}
     * @memberof CollectionItemLayer
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof CollectionItemLayer
     */
    properties?: Array<Array<string>>;
    /**
     *
     * @type {string}
     * @memberof CollectionItemLayer
     */
    type: CollectionItemLayerTypeEnum;
}
/**
 * @export
 */
export declare const CollectionItemLayerTypeEnum: {
    readonly Layer: "layer";
};
export type CollectionItemLayerTypeEnum = typeof CollectionItemLayerTypeEnum[keyof typeof CollectionItemLayerTypeEnum];
/**
 * Check if a given object implements the CollectionItemLayer interface.
 */
export declare function instanceOfCollectionItemLayer(value: object): boolean;
export declare function CollectionItemLayerFromJSON(json: any): CollectionItemLayer;
export declare function CollectionItemLayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionItemLayer;
export declare function CollectionItemLayerToJSON(value?: CollectionItemLayer | null): any;
