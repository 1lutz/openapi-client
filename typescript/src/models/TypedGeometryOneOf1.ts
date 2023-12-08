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
import type { MultiPoint } from './MultiPoint';
import {
    MultiPointFromJSON,
    MultiPointFromJSONTyped,
    MultiPointToJSON,
} from './MultiPoint';

/**
 * 
 * @export
 * @interface TypedGeometryOneOf1
 */
export interface TypedGeometryOneOf1 {
    /**
     * 
     * @type {MultiPoint}
     * @memberof TypedGeometryOneOf1
     */
    multiPoint: MultiPoint;
}

/**
 * Check if a given object implements the TypedGeometryOneOf1 interface.
 */
export function instanceOfTypedGeometryOneOf1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "multiPoint" in value;

    return isInstance;
}

export function TypedGeometryOneOf1FromJSON(json: any): TypedGeometryOneOf1 {
    return TypedGeometryOneOf1FromJSONTyped(json, false);
}

export function TypedGeometryOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedGeometryOneOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'multiPoint': MultiPointFromJSON(json['MultiPoint']),
    };
}

export function TypedGeometryOneOf1ToJSON(value?: TypedGeometryOneOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'MultiPoint': MultiPointToJSON(value.multiPoint),
    };
}

