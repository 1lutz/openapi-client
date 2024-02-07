/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { ProviderLayerCollectionId } from './ProviderLayerCollectionId';
import {
    ProviderLayerCollectionIdFromJSON,
    ProviderLayerCollectionIdFromJSONTyped,
    ProviderLayerCollectionIdToJSON,
} from './ProviderLayerCollectionId';

/**
 * 
 * @export
 * @interface LayerCollectionListingWithType
 */
export interface LayerCollectionListingWithType {
    /**
     * 
     * @type {string}
     * @memberof LayerCollectionListingWithType
     */
    description: string;
    /**
     * 
     * @type {ProviderLayerCollectionId}
     * @memberof LayerCollectionListingWithType
     */
    id: ProviderLayerCollectionId;
    /**
     * 
     * @type {string}
     * @memberof LayerCollectionListingWithType
     */
    name: string;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof LayerCollectionListingWithType
     */
    properties?: Array<Array<string>>;
    /**
     * 
     * @type {string}
     * @memberof LayerCollectionListingWithType
     */
    type: LayerCollectionListingWithTypeTypeEnum;
}


/**
 * @export
 */
export const LayerCollectionListingWithTypeTypeEnum = {
    Collection: 'collection',
    Layer: 'layer'
} as const;
export type LayerCollectionListingWithTypeTypeEnum = typeof LayerCollectionListingWithTypeTypeEnum[keyof typeof LayerCollectionListingWithTypeTypeEnum];


/**
 * Check if a given object implements the LayerCollectionListingWithType interface.
 */
export function instanceOfLayerCollectionListingWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function LayerCollectionListingWithTypeFromJSON(json: any): LayerCollectionListingWithType {
    return LayerCollectionListingWithTypeFromJSONTyped(json, false);
}

export function LayerCollectionListingWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollectionListingWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'id': ProviderLayerCollectionIdFromJSON(json['id']),
        'name': json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'type': json['type'],
    };
}

export function LayerCollectionListingWithTypeToJSON(value?: LayerCollectionListingWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': ProviderLayerCollectionIdToJSON(value.id),
        'name': value.name,
        'properties': value.properties,
        'type': value.type,
    };
}

