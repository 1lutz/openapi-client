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
/**
 * @export
 */
export const TaskStatusCompletedStatusEnum = {
    Completed: 'completed'
};
/**
 * Check if a given object implements the TaskStatusCompleted interface.
 */
export function instanceOfTaskStatusCompleted(value) {
    if (!('status' in value))
        return false;
    if (!('taskType' in value))
        return false;
    if (!('timeStarted' in value))
        return false;
    if (!('timeTotal' in value))
        return false;
    return true;
}
export function TaskStatusCompletedFromJSON(json) {
    return TaskStatusCompletedFromJSONTyped(json, false);
}
export function TaskStatusCompletedFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'] == null ? undefined : json['description'],
        'info': json['info'] == null ? undefined : json['info'],
        'status': json['status'],
        'taskType': json['taskType'],
        'timeStarted': json['timeStarted'],
        'timeTotal': json['timeTotal'],
    };
}
export function TaskStatusCompletedToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'info': value['info'],
        'status': value['status'],
        'taskType': value['taskType'],
        'timeStarted': value['timeStarted'],
        'timeTotal': value['timeTotal'],
    };
}
