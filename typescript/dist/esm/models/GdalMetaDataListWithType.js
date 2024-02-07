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
import { GdalLoadingInfoTemporalSliceFromJSON, GdalLoadingInfoTemporalSliceToJSON, } from './GdalLoadingInfoTemporalSlice';
import { RasterResultDescriptorFromJSON, RasterResultDescriptorToJSON, } from './RasterResultDescriptor';
/**
 * @export
 */
export const GdalMetaDataListWithTypeTypeEnum = {
    GdalMetaDataList: 'GdalMetaDataList'
};
/**
 * Check if a given object implements the GdalMetaDataListWithType interface.
 */
export function instanceOfGdalMetaDataListWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "params" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function GdalMetaDataListWithTypeFromJSON(json) {
    return GdalMetaDataListWithTypeFromJSONTyped(json, false);
}
export function GdalMetaDataListWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'params': (json['params'].map(GdalLoadingInfoTemporalSliceFromJSON)),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'type': json['type'],
    };
}
export function GdalMetaDataListWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'params': (value.params.map(GdalLoadingInfoTemporalSliceToJSON)),
        'resultDescriptor': RasterResultDescriptorToJSON(value.resultDescriptor),
        'type': value.type,
    };
}
