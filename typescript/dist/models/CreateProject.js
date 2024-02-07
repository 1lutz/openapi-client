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
exports.CreateProjectToJSON = exports.CreateProjectFromJSONTyped = exports.CreateProjectFromJSON = exports.instanceOfCreateProject = void 0;
const runtime_1 = require("../runtime");
const STRectangle_1 = require("./STRectangle");
const TimeStep_1 = require("./TimeStep");
/**
 * Check if a given object implements the CreateProject interface.
 */
function instanceOfCreateProject(value) {
    let isInstance = true;
    isInstance = isInstance && "bounds" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfCreateProject = instanceOfCreateProject;
function CreateProjectFromJSON(json) {
    return CreateProjectFromJSONTyped(json, false);
}
exports.CreateProjectFromJSON = CreateProjectFromJSON;
function CreateProjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bounds': (0, STRectangle_1.STRectangleFromJSON)(json['bounds']),
        'description': json['description'],
        'name': json['name'],
        'timeStep': !(0, runtime_1.exists)(json, 'timeStep') ? undefined : (0, TimeStep_1.TimeStepFromJSON)(json['timeStep']),
    };
}
exports.CreateProjectFromJSONTyped = CreateProjectFromJSONTyped;
function CreateProjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bounds': (0, STRectangle_1.STRectangleToJSON)(value.bounds),
        'description': value.description,
        'name': value.name,
        'timeStep': (0, TimeStep_1.TimeStepToJSON)(value.timeStep),
    };
}
exports.CreateProjectToJSON = CreateProjectToJSON;
