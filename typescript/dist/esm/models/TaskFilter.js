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
/**
 *
 * @export
 */
export const TaskFilter = {
    Running: 'running',
    Aborted: 'aborted',
    Failed: 'failed',
    Completed: 'completed'
};
export function TaskFilterFromJSON(json) {
    return TaskFilterFromJSONTyped(json, false);
}
export function TaskFilterFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function TaskFilterToJSON(value) {
    return value;
}