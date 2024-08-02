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
exports.SuggestMetaDataToJSON = exports.SuggestMetaDataFromJSONTyped = exports.SuggestMetaDataFromJSON = exports.instanceOfSuggestMetaData = void 0;
const runtime_1 = require("../runtime");
const DataPath_1 = require("./DataPath");
/**
 * Check if a given object implements the SuggestMetaData interface.
 */
function instanceOfSuggestMetaData(value) {
    let isInstance = true;
    isInstance = isInstance && "dataPath" in value;
    return isInstance;
}
exports.instanceOfSuggestMetaData = instanceOfSuggestMetaData;
function SuggestMetaDataFromJSON(json) {
    return SuggestMetaDataFromJSONTyped(json, false);
}
exports.SuggestMetaDataFromJSON = SuggestMetaDataFromJSON;
function SuggestMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dataPath': (0, DataPath_1.DataPathFromJSON)(json['dataPath']),
        'layerName': !(0, runtime_1.exists)(json, 'layerName') ? undefined : json['layerName'],
        'mainFile': !(0, runtime_1.exists)(json, 'mainFile') ? undefined : json['mainFile'],
    };
}
exports.SuggestMetaDataFromJSONTyped = SuggestMetaDataFromJSONTyped;
function SuggestMetaDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dataPath': (0, DataPath_1.DataPathToJSON)(value.dataPath),
        'layerName': value.layerName,
        'mainFile': value.mainFile,
    };
}
exports.SuggestMetaDataToJSON = SuggestMetaDataToJSON;