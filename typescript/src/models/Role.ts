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
 * @interface Role
 */
export interface Role {
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Role
     */
    name: string;
}

/**
 * Check if a given object implements the Role interface.
 */
export function instanceOfRole(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function RoleFromJSON(json: any): Role {
    return RoleFromJSONTyped(json, false);
}

export function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function RoleToJSON(value?: Role | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

