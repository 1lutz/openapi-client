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
export const LayerCollectionResourceTypeEnum = {
    LayerCollection: 'layerCollection'
} as const;
export type LayerCollectionResourceTypeEnum = typeof LayerCollectionResourceTypeEnum[keyof typeof LayerCollectionResourceTypeEnum];


/**
 * Check if a given object implements the LayerCollectionResource interface.
 */
export function instanceOfLayerCollectionResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function LayerCollectionResourceFromJSON(json: any): LayerCollectionResource {
    return LayerCollectionResourceFromJSONTyped(json, false);
}

export function LayerCollectionResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): LayerCollectionResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function LayerCollectionResourceToJSON(value?: LayerCollectionResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
    };
}

