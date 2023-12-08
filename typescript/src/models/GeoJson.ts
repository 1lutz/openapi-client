/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CollectionType } from './CollectionType';
import {
    CollectionTypeFromJSON,
    CollectionTypeFromJSONTyped,
    CollectionTypeToJSON,
} from './CollectionType';

/**
 * 
 * @export
 * @interface GeoJson
 */
export interface GeoJson {
    /**
     * 
     * @type {Array<any>}
     * @memberof GeoJson
     */
    features: Array<any>;
    /**
     * 
     * @type {CollectionType}
     * @memberof GeoJson
     */
    type: CollectionType;
}

/**
 * Check if a given object implements the GeoJson interface.
 */
export function instanceOfGeoJson(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "features" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function GeoJsonFromJSON(json: any): GeoJson {
    return GeoJsonFromJSONTyped(json, false);
}

export function GeoJsonFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoJson {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'features': json['features'],
        'type': CollectionTypeFromJSON(json['type']),
    };
}

export function GeoJsonToJSON(value?: GeoJson | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'features': value.features,
        'type': CollectionTypeToJSON(value.type),
    };
}

