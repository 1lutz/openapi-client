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
exports.TaskStatusToJSON = exports.TaskStatusFromJSONTyped = exports.TaskStatusFromJSON = void 0;
const AbortedTaskStatus_1 = require("./AbortedTaskStatus");
const CompletedTaskStatus_1 = require("./CompletedTaskStatus");
const FailedTaskStatus_1 = require("./FailedTaskStatus");
const RunningTaskStatus_1 = require("./RunningTaskStatus");
function TaskStatusFromJSON(json) {
    return TaskStatusFromJSONTyped(json, false);
}
exports.TaskStatusFromJSON = TaskStatusFromJSON;
function TaskStatusFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['status']) {
        case 'aborted':
            return Object.assign(Object.assign({}, (0, AbortedTaskStatus_1.AbortedTaskStatusFromJSONTyped)(json, true)), { status: 'aborted' });
        case 'completed':
            return Object.assign(Object.assign({}, (0, CompletedTaskStatus_1.CompletedTaskStatusFromJSONTyped)(json, true)), { status: 'completed' });
        case 'failed':
            return Object.assign(Object.assign({}, (0, FailedTaskStatus_1.FailedTaskStatusFromJSONTyped)(json, true)), { status: 'failed' });
        case 'running':
            return Object.assign(Object.assign({}, (0, RunningTaskStatus_1.RunningTaskStatusFromJSONTyped)(json, true)), { status: 'running' });
        default:
            throw new Error(`No variant of TaskStatus exists with 'status=${json['status']}'`);
    }
}
exports.TaskStatusFromJSONTyped = TaskStatusFromJSONTyped;
function TaskStatusToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['status']) {
        case 'aborted':
            return (0, AbortedTaskStatus_1.AbortedTaskStatusToJSON)(value);
        case 'completed':
            return (0, CompletedTaskStatus_1.CompletedTaskStatusToJSON)(value);
        case 'failed':
            return (0, FailedTaskStatus_1.FailedTaskStatusToJSON)(value);
        case 'running':
            return (0, RunningTaskStatus_1.RunningTaskStatusToJSON)(value);
        default:
            throw new Error(`No variant of TaskStatus exists with 'status=${value['status']}'`);
    }
}
exports.TaskStatusToJSON = TaskStatusToJSON;