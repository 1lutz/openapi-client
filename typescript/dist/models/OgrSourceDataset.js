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
exports.OgrSourceDatasetToJSON = exports.OgrSourceDatasetFromJSONTyped = exports.OgrSourceDatasetFromJSON = exports.instanceOfOgrSourceDataset = void 0;
const OgrSourceColumnSpec_1 = require("./OgrSourceColumnSpec");
const OgrSourceDatasetTimeType_1 = require("./OgrSourceDatasetTimeType");
const OgrSourceErrorSpec_1 = require("./OgrSourceErrorSpec");
const TypedGeometry_1 = require("./TypedGeometry");
const VectorDataType_1 = require("./VectorDataType");
/**
 * Check if a given object implements the OgrSourceDataset interface.
 */
function instanceOfOgrSourceDataset(value) {
    if (!('fileName' in value))
        return false;
    if (!('layerName' in value))
        return false;
    if (!('onError' in value))
        return false;
    return true;
}
exports.instanceOfOgrSourceDataset = instanceOfOgrSourceDataset;
function OgrSourceDatasetFromJSON(json) {
    return OgrSourceDatasetFromJSONTyped(json, false);
}
exports.OgrSourceDatasetFromJSON = OgrSourceDatasetFromJSON;
function OgrSourceDatasetFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'attributeQuery': json['attributeQuery'] == null ? undefined : json['attributeQuery'],
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'columns': json['columns'] == null ? undefined : (0, OgrSourceColumnSpec_1.OgrSourceColumnSpecFromJSON)(json['columns']),
        'dataType': json['dataType'] == null ? undefined : (0, VectorDataType_1.VectorDataTypeFromJSON)(json['dataType']),
        'defaultGeometry': json['defaultGeometry'] == null ? undefined : (0, TypedGeometry_1.TypedGeometryFromJSON)(json['defaultGeometry']),
        'fileName': json['fileName'],
        'forceOgrSpatialFilter': json['forceOgrSpatialFilter'] == null ? undefined : json['forceOgrSpatialFilter'],
        'forceOgrTimeFilter': json['forceOgrTimeFilter'] == null ? undefined : json['forceOgrTimeFilter'],
        'layerName': json['layerName'],
        'onError': (0, OgrSourceErrorSpec_1.OgrSourceErrorSpecFromJSON)(json['onError']),
        'sqlQuery': json['sqlQuery'] == null ? undefined : json['sqlQuery'],
        'time': json['time'] == null ? undefined : (0, OgrSourceDatasetTimeType_1.OgrSourceDatasetTimeTypeFromJSON)(json['time']),
    };
}
exports.OgrSourceDatasetFromJSONTyped = OgrSourceDatasetFromJSONTyped;
function OgrSourceDatasetToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'attributeQuery': value['attributeQuery'],
        'cacheTtl': value['cacheTtl'],
        'columns': (0, OgrSourceColumnSpec_1.OgrSourceColumnSpecToJSON)(value['columns']),
        'dataType': (0, VectorDataType_1.VectorDataTypeToJSON)(value['dataType']),
        'defaultGeometry': (0, TypedGeometry_1.TypedGeometryToJSON)(value['defaultGeometry']),
        'fileName': value['fileName'],
        'forceOgrSpatialFilter': value['forceOgrSpatialFilter'],
        'forceOgrTimeFilter': value['forceOgrTimeFilter'],
        'layerName': value['layerName'],
        'onError': (0, OgrSourceErrorSpec_1.OgrSourceErrorSpecToJSON)(value['onError']),
        'sqlQuery': value['sqlQuery'],
        'time': (0, OgrSourceDatasetTimeType_1.OgrSourceDatasetTimeTypeToJSON)(value['time']),
    };
}
exports.OgrSourceDatasetToJSON = OgrSourceDatasetToJSON;
