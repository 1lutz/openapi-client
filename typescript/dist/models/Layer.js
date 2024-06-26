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
exports.LayerToJSON = exports.LayerFromJSONTyped = exports.LayerFromJSON = exports.instanceOfLayer = void 0;
const ProviderLayerId_1 = require("./ProviderLayerId");
const Symbology_1 = require("./Symbology");
const Workflow_1 = require("./Workflow");
/**
 * Check if a given object implements the Layer interface.
 */
function instanceOfLayer(value) {
    if (!('description' in value))
        return false;
    if (!('id' in value))
        return false;
    if (!('name' in value))
        return false;
    if (!('workflow' in value))
        return false;
    return true;
}
exports.instanceOfLayer = instanceOfLayer;
function LayerFromJSON(json) {
    return LayerFromJSONTyped(json, false);
}
exports.LayerFromJSON = LayerFromJSON;
function LayerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'],
        'id': (0, ProviderLayerId_1.ProviderLayerIdFromJSON)(json['id']),
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'name': json['name'],
        'properties': json['properties'] == null ? undefined : json['properties'],
        'symbology': json['symbology'] == null ? undefined : (0, Symbology_1.SymbologyFromJSON)(json['symbology']),
        'workflow': (0, Workflow_1.WorkflowFromJSON)(json['workflow']),
    };
}
exports.LayerFromJSONTyped = LayerFromJSONTyped;
function LayerToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'id': (0, ProviderLayerId_1.ProviderLayerIdToJSON)(value['id']),
        'metadata': value['metadata'],
        'name': value['name'],
        'properties': value['properties'],
        'symbology': (0, Symbology_1.SymbologyToJSON)(value['symbology']),
        'workflow': (0, Workflow_1.WorkflowToJSON)(value['workflow']),
    };
}
exports.LayerToJSON = LayerToJSON;
