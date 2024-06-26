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
import { BoundingBox2DFromJSON, BoundingBox2DToJSON, } from './BoundingBox2D';
import { SpatialResolutionFromJSON, SpatialResolutionToJSON, } from './SpatialResolution';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * Check if a given object implements the PlotQueryRectangle interface.
 */
export function instanceOfPlotQueryRectangle(value) {
    if (!('spatialBounds' in value))
        return false;
    if (!('spatialResolution' in value))
        return false;
    if (!('timeInterval' in value))
        return false;
    return true;
}
export function PlotQueryRectangleFromJSON(json) {
    return PlotQueryRectangleFromJSONTyped(json, false);
}
export function PlotQueryRectangleFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'spatialBounds': BoundingBox2DFromJSON(json['spatialBounds']),
        'spatialResolution': SpatialResolutionFromJSON(json['spatialResolution']),
        'timeInterval': TimeIntervalFromJSON(json['timeInterval']),
    };
}
export function PlotQueryRectangleToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'spatialBounds': BoundingBox2DToJSON(value['spatialBounds']),
        'spatialResolution': SpatialResolutionToJSON(value['spatialResolution']),
        'timeInterval': TimeIntervalToJSON(value['timeInterval']),
    };
}
