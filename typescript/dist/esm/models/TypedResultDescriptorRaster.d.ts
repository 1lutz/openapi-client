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
import type { RasterBandDescriptor } from './RasterBandDescriptor';
import type { RasterDataType } from './RasterDataType';
import type { SpatialPartition2D } from './SpatialPartition2D';
import type { SpatialResolution } from './SpatialResolution';
import type { TimeInterval } from './TimeInterval';
/**
 * A `ResultDescriptor` for raster queries
 * @export
 * @interface TypedResultDescriptorRaster
 */
export interface TypedResultDescriptorRaster {
    /**
     *
     * @type {Array<RasterBandDescriptor>}
     * @memberof TypedResultDescriptorRaster
     */
    bands: Array<RasterBandDescriptor>;
    /**
     *
     * @type {SpatialPartition2D}
     * @memberof TypedResultDescriptorRaster
     */
    bbox?: SpatialPartition2D;
    /**
     *
     * @type {RasterDataType}
     * @memberof TypedResultDescriptorRaster
     */
    dataType: RasterDataType;
    /**
     *
     * @type {SpatialResolution}
     * @memberof TypedResultDescriptorRaster
     */
    resolution?: SpatialResolution;
    /**
     *
     * @type {string}
     * @memberof TypedResultDescriptorRaster
     */
    spatialReference: string;
    /**
     *
     * @type {TimeInterval}
     * @memberof TypedResultDescriptorRaster
     */
    time?: TimeInterval;
    /**
     *
     * @type {string}
     * @memberof TypedResultDescriptorRaster
     */
    type: TypedResultDescriptorRasterTypeEnum;
}
/**
 * @export
 */
export declare const TypedResultDescriptorRasterTypeEnum: {
    readonly Raster: "raster";
};
export type TypedResultDescriptorRasterTypeEnum = typeof TypedResultDescriptorRasterTypeEnum[keyof typeof TypedResultDescriptorRasterTypeEnum];
/**
 * Check if a given object implements the TypedResultDescriptorRaster interface.
 */
export declare function instanceOfTypedResultDescriptorRaster(value: object): boolean;
export declare function TypedResultDescriptorRasterFromJSON(json: any): TypedResultDescriptorRaster;
export declare function TypedResultDescriptorRasterFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedResultDescriptorRaster;
export declare function TypedResultDescriptorRasterToJSON(value?: TypedResultDescriptorRaster | null): any;