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
 * @interface CompletedTaskStatus
 */
export interface CompletedTaskStatus {
    /**
     *
     * @type {string}
     * @memberof CompletedTaskStatus
     */
    description?: string;
    /**
     *
     * @type {any}
     * @memberof CompletedTaskStatus
     */
    info?: any | null;
    /**
     *
     * @type {string}
     * @memberof CompletedTaskStatus
     */
    status: CompletedTaskStatusStatusEnum;
    /**
     *
     * @type {string}
     * @memberof CompletedTaskStatus
     */
    taskType: string;
    /**
     *
     * @type {string}
     * @memberof CompletedTaskStatus
     */
    timeStarted: string;
    /**
     *
     * @type {string}
     * @memberof CompletedTaskStatus
     */
    timeTotal: string;
}
/**
 * @export
 */
export declare const CompletedTaskStatusStatusEnum: {
    readonly Completed: "completed";
};
export type CompletedTaskStatusStatusEnum = typeof CompletedTaskStatusStatusEnum[keyof typeof CompletedTaskStatusStatusEnum];
/**
 * Check if a given object implements the CompletedTaskStatus interface.
 */
export declare function instanceOfCompletedTaskStatus(value: object): boolean;
export declare function CompletedTaskStatusFromJSON(json: any): CompletedTaskStatus;
export declare function CompletedTaskStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletedTaskStatus;
export declare function CompletedTaskStatusToJSON(value?: CompletedTaskStatus | null): any;
