"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataDefinitionGdalMetadataNetCdfCfToJSON = exports.MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped = exports.MetaDataDefinitionGdalMetadataNetCdfCfFromJSON = exports.instanceOfMetaDataDefinitionGdalMetadataNetCdfCf = exports.MetaDataDefinitionGdalMetadataNetCdfCfTypeEnum = void 0;
const GdalDatasetParameters_1 = require("./GdalDatasetParameters");
const RasterResultDescriptor_1 = require("./RasterResultDescriptor");
const TimeStep_1 = require("./TimeStep");
/**
 * @export
 */
exports.MetaDataDefinitionGdalMetadataNetCdfCfTypeEnum = {
    GdalMetadataNetCdfCf: 'GdalMetadataNetCdfCf'
};
/**
 * Check if a given object implements the MetaDataDefinitionGdalMetadataNetCdfCf interface.
 */
function instanceOfMetaDataDefinitionGdalMetadataNetCdfCf(value) {
    if (!('bandOffset' in value))
        return false;
    if (!('end' in value))
        return false;
    if (!('params' in value))
        return false;
    if (!('resultDescriptor' in value))
        return false;
    if (!('start' in value))
        return false;
    if (!('step' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfMetaDataDefinitionGdalMetadataNetCdfCf = instanceOfMetaDataDefinitionGdalMetadataNetCdfCf;
function MetaDataDefinitionGdalMetadataNetCdfCfFromJSON(json) {
    return MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped(json, false);
}
exports.MetaDataDefinitionGdalMetadataNetCdfCfFromJSON = MetaDataDefinitionGdalMetadataNetCdfCfFromJSON;
function MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bandOffset': json['bandOffset'],
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'end': json['end'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersFromJSON)(json['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorFromJSON)(json['resultDescriptor']),
        'start': json['start'],
        'step': (0, TimeStep_1.TimeStepFromJSON)(json['step']),
        'type': json['type'],
    };
}
exports.MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped = MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped;
function MetaDataDefinitionGdalMetadataNetCdfCfToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bandOffset': value['bandOffset'],
        'cacheTtl': value['cacheTtl'],
        'end': value['end'],
        'params': (0, GdalDatasetParameters_1.GdalDatasetParametersToJSON)(value['params']),
        'resultDescriptor': (0, RasterResultDescriptor_1.RasterResultDescriptorToJSON)(value['resultDescriptor']),
        'start': value['start'],
        'step': (0, TimeStep_1.TimeStepToJSON)(value['step']),
        'type': value['type'],
    };
}
exports.MetaDataDefinitionGdalMetadataNetCdfCfToJSON = MetaDataDefinitionGdalMetadataNetCdfCfToJSON;
