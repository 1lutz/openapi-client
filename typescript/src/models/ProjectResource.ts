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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProjectResource
 */
export interface ProjectResource {
    /**
     * 
     * @type {string}
     * @memberof ProjectResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectResource
     */
    type: ProjectResourceTypeEnum;
}


/**
 * @export
 */
export const ProjectResourceTypeEnum = {
    Project: 'project'
} as const;
export type ProjectResourceTypeEnum = typeof ProjectResourceTypeEnum[keyof typeof ProjectResourceTypeEnum];


/**
 * Check if a given object implements the ProjectResource interface.
 */
export function instanceOfProjectResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ProjectResourceFromJSON(json: any): ProjectResource {
    return ProjectResourceFromJSONTyped(json, false);
}

export function ProjectResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ProjectResourceToJSON(value?: ProjectResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
    };
}
