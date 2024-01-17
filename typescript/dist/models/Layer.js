"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerToJSON = exports.LayerFromJSONTyped = exports.LayerFromJSON = exports.instanceOfLayer = void 0;
const runtime_1 = require("../runtime");
const ProviderLayerId_1 = require("./ProviderLayerId");
const Symbology_1 = require("./Symbology");
const Workflow_1 = require("./Workflow");
/**
 * Check if a given object implements the Layer interface.
 */
function instanceOfLayer(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "workflow" in value;
    return isInstance;
}
exports.instanceOfLayer = instanceOfLayer;
function LayerFromJSON(json) {
    return LayerFromJSONTyped(json, false);
}
exports.LayerFromJSON = LayerFromJSON;
function LayerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'id': (0, ProviderLayerId_1.ProviderLayerIdFromJSON)(json['id']),
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        'name': json['name'],
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : json['properties'],
        'symbology': !(0, runtime_1.exists)(json, 'symbology') ? undefined : (0, Symbology_1.SymbologyFromJSON)(json['symbology']),
        'workflow': (0, Workflow_1.WorkflowFromJSON)(json['workflow']),
    };
}
exports.LayerFromJSONTyped = LayerFromJSONTyped;
function LayerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'id': (0, ProviderLayerId_1.ProviderLayerIdToJSON)(value.id),
        'metadata': value.metadata,
        'name': value.name,
        'properties': value.properties,
        'symbology': (0, Symbology_1.SymbologyToJSON)(value.symbology),
        'workflow': (0, Workflow_1.WorkflowToJSON)(value.workflow),
    };
}
exports.LayerToJSON = LayerToJSON;