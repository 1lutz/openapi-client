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
 *
 * @export
 */
export declare const TaskFilter: {
    readonly Running: "running";
    readonly Aborted: "aborted";
    readonly Failed: "failed";
    readonly Completed: "completed";
};
export type TaskFilter = typeof TaskFilter[keyof typeof TaskFilter];
export declare function TaskFilterFromJSON(json: any): TaskFilter;
export declare function TaskFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskFilter;
export declare function TaskFilterToJSON(value?: TaskFilter | null): any;
