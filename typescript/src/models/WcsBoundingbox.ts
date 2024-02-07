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
 * @interface WcsBoundingbox
 */
export interface WcsBoundingbox {
    /**
     * 
     * @type {Array<number>}
     * @memberof WcsBoundingbox
     */
    bbox: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof WcsBoundingbox
     */
    spatialReference?: string | null;
}

/**
 * Check if a given object implements the WcsBoundingbox interface.
 */
export function instanceOfWcsBoundingbox(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bbox" in value;

    return isInstance;
}

export function WcsBoundingboxFromJSON(json: any): WcsBoundingbox {
    return WcsBoundingboxFromJSONTyped(json, false);
}

export function WcsBoundingboxFromJSONTyped(json: any, ignoreDiscriminator: boolean): WcsBoundingbox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bbox': json['bbox'],
        'spatialReference': !exists(json, 'spatial_reference') ? undefined : json['spatial_reference'],
    };
}

export function WcsBoundingboxToJSON(value?: WcsBoundingbox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bbox': value.bbox,
        'spatial_reference': value.spatialReference,
    };
}

