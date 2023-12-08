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
import type { STRectangle } from './STRectangle';
import {
    STRectangleFromJSON,
    STRectangleFromJSONTyped,
    STRectangleToJSON,
} from './STRectangle';
import type { UserInfo } from './UserInfo';
import {
    UserInfoFromJSON,
    UserInfoFromJSONTyped,
    UserInfoToJSON,
} from './UserInfo';

/**
 * 
 * @export
 * @interface UserSession
 */
export interface UserSession {
    /**
     * 
     * @type {Date}
     * @memberof UserSession
     */
    created: Date;
    /**
     * 
     * @type {string}
     * @memberof UserSession
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserSession
     */
    project?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserSession
     */
    roles: Array<string>;
    /**
     * 
     * @type {UserInfo}
     * @memberof UserSession
     */
    user: UserInfo;
    /**
     * 
     * @type {Date}
     * @memberof UserSession
     */
    validUntil: Date;
    /**
     * 
     * @type {STRectangle}
     * @memberof UserSession
     */
    view?: STRectangle | null;
}

/**
 * Check if a given object implements the UserSession interface.
 */
export function instanceOfUserSession(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "roles" in value;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "validUntil" in value;

    return isInstance;
}

export function UserSessionFromJSON(json: any): UserSession {
    return UserSessionFromJSONTyped(json, false);
}

export function UserSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSession {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created': (new Date(json['created'])),
        'id': json['id'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'roles': json['roles'],
        'user': UserInfoFromJSON(json['user']),
        'validUntil': (new Date(json['validUntil'])),
        'view': !exists(json, 'view') ? undefined : STRectangleFromJSON(json['view']),
    };
}

export function UserSessionToJSON(value?: UserSession | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created': (value.created.toISOString()),
        'id': value.id,
        'project': value.project,
        'roles': value.roles,
        'user': UserInfoToJSON(value.user),
        'validUntil': (value.validUntil.toISOString()),
        'view': STRectangleToJSON(value.view),
    };
}
