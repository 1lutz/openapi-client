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
import type { BoundingBox2D } from './BoundingBox2D';
import type { SpatialResolution } from './SpatialResolution';
import type { TimeInterval } from './TimeInterval';
/**
 * A spatio-temporal rectangle with a specified resolution
 * @export
 * @interface PlotQueryRectangle
 */
export interface PlotQueryRectangle {
    /**
     *
     * @type {BoundingBox2D}
     * @memberof PlotQueryRectangle
     */
    spatialBounds: BoundingBox2D;
    /**
     *
     * @type {SpatialResolution}
     * @memberof PlotQueryRectangle
     */
    spatialResolution: SpatialResolution;
    /**
     *
     * @type {TimeInterval}
     * @memberof PlotQueryRectangle
     */
    timeInterval: TimeInterval;
}
/**
 * Check if a given object implements the PlotQueryRectangle interface.
 */
export declare function instanceOfPlotQueryRectangle(value: object): boolean;
export declare function PlotQueryRectangleFromJSON(json: any): PlotQueryRectangle;
export declare function PlotQueryRectangleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlotQueryRectangle;
export declare function PlotQueryRectangleToJSON(value?: PlotQueryRectangle | null): any;
