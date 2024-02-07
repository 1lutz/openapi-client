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


import * as runtime from '../runtime';
import type {
  AddRole,
  Quota,
  RoleDescription,
  UpdateQuota,
} from '../models/index';
import {
    AddRoleFromJSON,
    AddRoleToJSON,
    QuotaFromJSON,
    QuotaToJSON,
    RoleDescriptionFromJSON,
    RoleDescriptionToJSON,
    UpdateQuotaFromJSON,
    UpdateQuotaToJSON,
} from '../models/index';

export interface AddRoleHandlerRequest {
    addRole: AddRole;
}

export interface AssignRoleHandlerRequest {
    user: string;
    role: string;
}

export interface GetUserQuotaHandlerRequest {
    user: string;
}

export interface RemoveRoleHandlerRequest {
    role: string;
}

export interface RevokeRoleHandlerRequest {
    user: string;
    role: string;
}

export interface UpdateUserQuotaHandlerRequest {
    user: string;
    updateQuota: UpdateQuota;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Add a new role. Requires admin privilige.
     * Add a new role. Requires admin privilige.
     */
    async addRoleHandlerRaw(requestParameters: AddRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.addRole === null || requestParameters.addRole === undefined) {
            throw new runtime.RequiredError('addRole','Required parameter requestParameters.addRole was null or undefined when calling addRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/roles`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AddRoleToJSON(requestParameters.addRole),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Add a new role. Requires admin privilige.
     * Add a new role. Requires admin privilige.
     */
    async addRoleHandler(requestParameters: AddRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.addRoleHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Assign a role to a user. Requires admin privilige.
     * Assign a role to a user. Requires admin privilige.
     */
    async assignRoleHandlerRaw(requestParameters: AssignRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling assignRoleHandler.');
        }

        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling assignRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{user}/roles/{role}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))).replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Assign a role to a user. Requires admin privilige.
     * Assign a role to a user. Requires admin privilige.
     */
    async assignRoleHandler(requestParameters: AssignRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.assignRoleHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Query roles for the current user.
     * Query roles for the current user.
     */
    async getRoleDescriptionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RoleDescription>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/user/roles/descriptions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RoleDescriptionFromJSON));
    }

    /**
     * Query roles for the current user.
     * Query roles for the current user.
     */
    async getRoleDescriptions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RoleDescription>> {
        const response = await this.getRoleDescriptionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the available and used quota of a specific user.
     * Retrieves the available and used quota of a specific user.
     */
    async getUserQuotaHandlerRaw(requestParameters: GetUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Quota>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling getUserQuotaHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quotas/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuotaFromJSON(jsonValue));
    }

    /**
     * Retrieves the available and used quota of a specific user.
     * Retrieves the available and used quota of a specific user.
     */
    async getUserQuotaHandler(requestParameters: GetUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Quota> {
        const response = await this.getUserQuotaHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the available and used quota of the current user.
     * Retrieves the available and used quota of the current user.
     */
    async quotaHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Quota>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quota`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuotaFromJSON(jsonValue));
    }

    /**
     * Retrieves the available and used quota of the current user.
     * Retrieves the available and used quota of the current user.
     */
    async quotaHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Quota> {
        const response = await this.quotaHandlerRaw(initOverrides);
        return await response.value();
    }

    /**
     * Remove a role. Requires admin privilige.
     * Remove a role. Requires admin privilige.
     */
    async removeRoleHandlerRaw(requestParameters: RemoveRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling removeRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/roles/{role}`.replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove a role. Requires admin privilige.
     * Remove a role. Requires admin privilige.
     */
    async removeRoleHandler(requestParameters: RemoveRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeRoleHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Revoke a role from a user. Requires admin privilige.
     * Revoke a role from a user. Requires admin privilige.
     */
    async revokeRoleHandlerRaw(requestParameters: RevokeRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling revokeRoleHandler.');
        }

        if (requestParameters.role === null || requestParameters.role === undefined) {
            throw new runtime.RequiredError('role','Required parameter requestParameters.role was null or undefined when calling revokeRoleHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/users/{user}/roles/{role}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))).replace(`{${"role"}}`, encodeURIComponent(String(requestParameters.role))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Revoke a role from a user. Requires admin privilige.
     * Revoke a role from a user. Requires admin privilige.
     */
    async revokeRoleHandler(requestParameters: RevokeRoleHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.revokeRoleHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Update the available quota of a specific user.
     * Update the available quota of a specific user.
     */
    async updateUserQuotaHandlerRaw(requestParameters: UpdateUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUserQuotaHandler.');
        }

        if (requestParameters.updateQuota === null || requestParameters.updateQuota === undefined) {
            throw new runtime.RequiredError('updateQuota','Required parameter requestParameters.updateQuota was null or undefined when calling updateUserQuotaHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/quotas/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateQuotaToJSON(requestParameters.updateQuota),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update the available quota of a specific user.
     * Update the available quota of a specific user.
     */
    async updateUserQuotaHandler(requestParameters: UpdateUserQuotaHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateUserQuotaHandlerRaw(requestParameters, initOverrides);
    }

}
