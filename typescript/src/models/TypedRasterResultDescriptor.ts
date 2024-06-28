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

import { mapValues } from '../runtime';
import type { RasterBandDescriptor } from './RasterBandDescriptor';
import {
    RasterBandDescriptorFromJSON,
    RasterBandDescriptorFromJSONTyped,
    RasterBandDescriptorToJSON,
} from './RasterBandDescriptor';
import type { RasterDataType } from './RasterDataType';
import {
    RasterDataTypeFromJSON,
    RasterDataTypeFromJSONTyped,
    RasterDataTypeToJSON,
} from './RasterDataType';
import type { SpatialPartition2D } from './SpatialPartition2D';
import {
    SpatialPartition2DFromJSON,
    SpatialPartition2DFromJSONTyped,
    SpatialPartition2DToJSON,
} from './SpatialPartition2D';
import type { SpatialResolution } from './SpatialResolution';
import {
    SpatialResolutionFromJSON,
    SpatialResolutionFromJSONTyped,
    SpatialResolutionToJSON,
} from './SpatialResolution';
import type { TimeInterval } from './TimeInterval';
import {
    TimeIntervalFromJSON,
    TimeIntervalFromJSONTyped,
    TimeIntervalToJSON,
} from './TimeInterval';

/**
 * A `ResultDescriptor` for raster queries
 * @export
 * @interface TypedRasterResultDescriptor
 */
export interface TypedRasterResultDescriptor {
    /**
     * 
     * @type {Array<RasterBandDescriptor>}
     * @memberof TypedRasterResultDescriptor
     */
    bands: Array<RasterBandDescriptor>;
    /**
     * 
     * @type {SpatialPartition2D}
     * @memberof TypedRasterResultDescriptor
     */
    bbox?: SpatialPartition2D;
    /**
     * 
     * @type {RasterDataType}
     * @memberof TypedRasterResultDescriptor
     */
    dataType: RasterDataType;
    /**
     * 
     * @type {SpatialResolution}
     * @memberof TypedRasterResultDescriptor
     */
    resolution?: SpatialResolution;
    /**
     * 
     * @type {string}
     * @memberof TypedRasterResultDescriptor
     */
    spatialReference: string;
    /**
     * 
     * @type {TimeInterval}
     * @memberof TypedRasterResultDescriptor
     */
    time?: TimeInterval;
    /**
     * 
     * @type {string}
     * @memberof TypedRasterResultDescriptor
     */
    type: TypedRasterResultDescriptorTypeEnum;
}


/**
 * @export
 */
export const TypedRasterResultDescriptorTypeEnum = {
    Raster: 'raster'
} as const;
export type TypedRasterResultDescriptorTypeEnum = typeof TypedRasterResultDescriptorTypeEnum[keyof typeof TypedRasterResultDescriptorTypeEnum];


/**
 * Check if a given object implements the TypedRasterResultDescriptor interface.
 */
export function instanceOfTypedRasterResultDescriptor(value: object): boolean {
    if (!('bands' in value)) return false;
    if (!('dataType' in value)) return false;
    if (!('spatialReference' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function TypedRasterResultDescriptorFromJSON(json: any): TypedRasterResultDescriptor {
    return TypedRasterResultDescriptorFromJSONTyped(json, false);
}

export function TypedRasterResultDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedRasterResultDescriptor {
    if (json == null) {
        return json;
    }
    return {
        
        'bands': ((json['bands'] as Array<any>).map(RasterBandDescriptorFromJSON)),
        'bbox': json['bbox'] == null ? undefined : SpatialPartition2DFromJSON(json['bbox']),
        'dataType': RasterDataTypeFromJSON(json['dataType']),
        'resolution': json['resolution'] == null ? undefined : SpatialResolutionFromJSON(json['resolution']),
        'spatialReference': json['spatialReference'],
        'time': json['time'] == null ? undefined : TimeIntervalFromJSON(json['time']),
        'type': json['type'],
    };
}

export function TypedRasterResultDescriptorToJSON(value?: TypedRasterResultDescriptor | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bands': ((value['bands'] as Array<any>).map(RasterBandDescriptorToJSON)),
        'bbox': SpatialPartition2DToJSON(value['bbox']),
        'dataType': RasterDataTypeToJSON(value['dataType']),
        'resolution': SpatialResolutionToJSON(value['resolution']),
        'spatialReference': value['spatialReference'],
        'time': TimeIntervalToJSON(value['time']),
        'type': value['type'],
    };
}
