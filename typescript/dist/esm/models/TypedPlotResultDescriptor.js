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
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * @export
 */
export const TypedPlotResultDescriptorTypeEnum = {
    Plot: 'plot'
};
/**
 * Check if a given object implements the TypedPlotResultDescriptor interface.
 */
export function instanceOfTypedPlotResultDescriptor(value) {
    if (!('spatialReference' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function TypedPlotResultDescriptorFromJSON(json) {
    return TypedPlotResultDescriptorFromJSONTyped(json, false);
}
export function TypedPlotResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bbox': json['bbox'] == null ? undefined : BoundingBox2DFromJSON(json['bbox']),
        'spatialReference': json['spatialReference'],
        'time': json['time'] == null ? undefined : TimeIntervalFromJSON(json['time']),
        'type': json['type'],
    };
}
export function TypedPlotResultDescriptorToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bbox': BoundingBox2DToJSON(value['bbox']),
        'spatialReference': value['spatialReference'],
        'time': TimeIntervalToJSON(value['time']),
        'type': value['type'],
    };
}
