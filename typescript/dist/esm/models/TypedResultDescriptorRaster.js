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
import { RasterBandDescriptorFromJSON, RasterBandDescriptorToJSON, } from './RasterBandDescriptor';
import { RasterDataTypeFromJSON, RasterDataTypeToJSON, } from './RasterDataType';
import { SpatialPartition2DFromJSON, SpatialPartition2DToJSON, } from './SpatialPartition2D';
import { SpatialResolutionFromJSON, SpatialResolutionToJSON, } from './SpatialResolution';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * @export
 */
export const TypedResultDescriptorRasterTypeEnum = {
    Raster: 'raster'
};
/**
 * Check if a given object implements the TypedResultDescriptorRaster interface.
 */
export function instanceOfTypedResultDescriptorRaster(value) {
    if (!('bands' in value))
        return false;
    if (!('dataType' in value))
        return false;
    if (!('spatialReference' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function TypedResultDescriptorRasterFromJSON(json) {
    return TypedResultDescriptorRasterFromJSONTyped(json, false);
}
export function TypedResultDescriptorRasterFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bands': (json['bands'].map(RasterBandDescriptorFromJSON)),
        'bbox': json['bbox'] == null ? undefined : SpatialPartition2DFromJSON(json['bbox']),
        'dataType': RasterDataTypeFromJSON(json['dataType']),
        'resolution': json['resolution'] == null ? undefined : SpatialResolutionFromJSON(json['resolution']),
        'spatialReference': json['spatialReference'],
        'time': json['time'] == null ? undefined : TimeIntervalFromJSON(json['time']),
        'type': json['type'],
    };
}
export function TypedResultDescriptorRasterToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bands': (value['bands'].map(RasterBandDescriptorToJSON)),
        'bbox': SpatialPartition2DToJSON(value['bbox']),
        'dataType': RasterDataTypeToJSON(value['dataType']),
        'resolution': SpatialResolutionToJSON(value['resolution']),
        'spatialReference': value['spatialReference'],
        'time': TimeIntervalToJSON(value['time']),
        'type': value['type'],
    };
}
