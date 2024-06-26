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
exports.UpdateProjectToJSON = exports.UpdateProjectFromJSONTyped = exports.UpdateProjectFromJSON = exports.instanceOfUpdateProject = void 0;
const LayerUpdate_1 = require("./LayerUpdate");
const PlotUpdate_1 = require("./PlotUpdate");
const STRectangle_1 = require("./STRectangle");
const TimeStep_1 = require("./TimeStep");
/**
 * Check if a given object implements the UpdateProject interface.
 */
function instanceOfUpdateProject(value) {
    if (!('id' in value))
        return false;
    return true;
}
exports.instanceOfUpdateProject = instanceOfUpdateProject;
function UpdateProjectFromJSON(json) {
    return UpdateProjectFromJSONTyped(json, false);
}
exports.UpdateProjectFromJSON = UpdateProjectFromJSON;
function UpdateProjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bounds': json['bounds'] == null ? undefined : (0, STRectangle_1.STRectangleFromJSON)(json['bounds']),
        'description': json['description'] == null ? undefined : json['description'],
        'id': json['id'],
        'layers': json['layers'] == null ? undefined : (json['layers'].map(LayerUpdate_1.LayerUpdateFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'plots': json['plots'] == null ? undefined : (json['plots'].map(PlotUpdate_1.PlotUpdateFromJSON)),
        'timeStep': json['timeStep'] == null ? undefined : (0, TimeStep_1.TimeStepFromJSON)(json['timeStep']),
    };
}
exports.UpdateProjectFromJSONTyped = UpdateProjectFromJSONTyped;
function UpdateProjectToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'bounds': (0, STRectangle_1.STRectangleToJSON)(value['bounds']),
        'description': value['description'],
        'id': value['id'],
        'layers': value['layers'] == null ? undefined : (value['layers'].map(LayerUpdate_1.LayerUpdateToJSON)),
        'name': value['name'],
        'plots': value['plots'] == null ? undefined : (value['plots'].map(PlotUpdate_1.PlotUpdateToJSON)),
        'timeStep': (0, TimeStep_1.TimeStepToJSON)(value['timeStep']),
    };
}
exports.UpdateProjectToJSON = UpdateProjectToJSON;
