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
exports.ResourceIdProjectToJSON = exports.ResourceIdProjectFromJSONTyped = exports.ResourceIdProjectFromJSON = exports.instanceOfResourceIdProject = exports.ResourceIdProjectTypeEnum = void 0;
/**
 * @export
 */
exports.ResourceIdProjectTypeEnum = {
    Project: 'Project'
};
/**
 * Check if a given object implements the ResourceIdProject interface.
 */
function instanceOfResourceIdProject(value) {
    if (!('id' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
exports.instanceOfResourceIdProject = instanceOfResourceIdProject;
function ResourceIdProjectFromJSON(json) {
    return ResourceIdProjectFromJSONTyped(json, false);
}
exports.ResourceIdProjectFromJSON = ResourceIdProjectFromJSON;
function ResourceIdProjectFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
exports.ResourceIdProjectFromJSONTyped = ResourceIdProjectFromJSONTyped;
function ResourceIdProjectToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
exports.ResourceIdProjectToJSON = ResourceIdProjectToJSON;
