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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FailedTaskStatus
 */
export interface FailedTaskStatus {
    /**
     * 
     * @type {any}
     * @memberof FailedTaskStatus
     */
    cleanUp: any | null;
    /**
     * 
     * @type {any}
     * @memberof FailedTaskStatus
     */
    error: any | null;
    /**
     * 
     * @type {string}
     * @memberof FailedTaskStatus
     */
    status: FailedTaskStatusStatusEnum;
}


/**
 * @export
 */
export const FailedTaskStatusStatusEnum = {
    Failed: 'failed'
} as const;
export type FailedTaskStatusStatusEnum = typeof FailedTaskStatusStatusEnum[keyof typeof FailedTaskStatusStatusEnum];


/**
 * Check if a given object implements the FailedTaskStatus interface.
 */
export function instanceOfFailedTaskStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cleanUp" in value;
    isInstance = isInstance && "error" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function FailedTaskStatusFromJSON(json: any): FailedTaskStatus {
    return FailedTaskStatusFromJSONTyped(json, false);
}

export function FailedTaskStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): FailedTaskStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cleanUp': json['cleanUp'],
        'error': json['error'],
        'status': json['status'],
    };
}

export function FailedTaskStatusToJSON(value?: FailedTaskStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cleanUp': value.cleanUp,
        'error': value.error,
        'status': value.status,
    };
}

