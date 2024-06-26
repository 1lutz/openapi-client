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
exports.ResourceProjectToJSON = exports.ResourceProjectFromJSONTyped = exports.ResourceProjectFromJSON = exports.instanceOfResourceProject = exports.ResourceProjectTypeEnum = void 0;
/**
 * @export
 */
exports.ResourceProjectTypeEnum = {
    Project: 'project'
};
/**
 * Check if a given object implements the ResourceProject interface.
 */
function instanceOfResourceProject(value) {
    if (!('id' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfResourceProject = instanceOfResourceProject;
function ResourceProjectFromJSON(json) {
    return ResourceProjectFromJSONTyped(json, false);
}
exports.ResourceProjectFromJSON = ResourceProjectFromJSON;
function ResourceProjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
exports.ResourceProjectFromJSONTyped = ResourceProjectFromJSONTyped;
function ResourceProjectToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
exports.ResourceProjectToJSON = ResourceProjectToJSON;
