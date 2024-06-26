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
exports.LayerUpdateToJSON = exports.LayerUpdateFromJSONTyped = exports.LayerUpdateFromJSON = void 0;
const ProjectLayer_1 = require("./ProjectLayer");
const ProjectUpdateToken_1 = require("./ProjectUpdateToken");
function LayerUpdateFromJSON(json) {
    return LayerUpdateFromJSONTyped(json, false);
}
exports.LayerUpdateFromJSON = LayerUpdateFromJSON;
function LayerUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if ((0, ProjectLayer_1.instanceOfProjectLayer)(json)) {
        return (0, ProjectLayer_1.ProjectLayerFromJSONTyped)(json, true);
    }
    if ((0, ProjectUpdateToken_1.instanceOfProjectUpdateToken)(json)) {
        return (0, ProjectUpdateToken_1.ProjectUpdateTokenFromJSONTyped)(json, true);
    }
}
exports.LayerUpdateFromJSONTyped = LayerUpdateFromJSONTyped;
function LayerUpdateToJSON(value) {
    if (value == null) {
        return value;
    }
    if (typeof value === 'object' && (0, ProjectLayer_1.instanceOfProjectLayer)(value)) {
        return (0, ProjectLayer_1.ProjectLayerToJSON)(value);
    }
    if ((0, ProjectUpdateToken_1.instanceOfProjectUpdateToken)(value)) {
        return (0, ProjectUpdateToken_1.ProjectUpdateTokenToJSON)(value);
    }
    return {};
}
exports.LayerUpdateToJSON = LayerUpdateToJSON;
