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


import * as runtime from '../runtime';
import type {
  UserCredentials,
  UserRegistration,
  UserSession,
} from '../models/index';
import {
    UserCredentialsFromJSON,
    UserCredentialsToJSON,
    UserRegistrationFromJSON,
    UserRegistrationToJSON,
    UserSessionFromJSON,
    UserSessionToJSON,
} from '../models/index';

export interface LoginHandlerRequest {
    userCredentials: UserCredentials;
}

export interface RegisterUserHandlerRequest {
    userRegistration: UserRegistration;
}

/**
 * 
 */
export class SessionApi extends runtime.BaseAPI {

    /**
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     */
    async anonymousHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSession>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/anonymous`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSessionFromJSON(jsonValue));
    }

    /**
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     * Creates session for anonymous user. The session\'s id serves as a Bearer token for requests.
     */
    async anonymousHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSession> {
        const response = await this.anonymousHandlerRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     */
    async loginHandlerRaw(requestParameters: LoginHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSession>> {
        if (requestParameters.userCredentials === null || requestParameters.userCredentials === undefined) {
            throw new runtime.RequiredError('userCredentials','Required parameter requestParameters.userCredentials was null or undefined when calling loginHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserCredentialsToJSON(requestParameters.userCredentials),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSessionFromJSON(jsonValue));
    }

    /**
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     * Creates a session by providing user credentials. The session\'s id serves as a Bearer token for requests.
     */
    async loginHandler(requestParameters: LoginHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSession> {
        const response = await this.loginHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ends a session.
     * Ends a session.
     */
    async logoutHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ends a session.
     * Ends a session.
     */
    async logoutHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logoutHandlerRaw(initOverrides);
    }

    /**
     * Registers a user.
     * Registers a user.
     */
    async registerUserHandlerRaw(requestParameters: RegisterUserHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.userRegistration === null || requestParameters.userRegistration === undefined) {
            throw new runtime.RequiredError('userRegistration','Required parameter requestParameters.userRegistration was null or undefined when calling registerUserHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserRegistrationToJSON(requestParameters.userRegistration),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Registers a user.
     * Registers a user.
     */
    async registerUserHandler(requestParameters: RegisterUserHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.registerUserHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves details about the current session.
     * Retrieves details about the current session.
     */
    async sessionHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserSession>> {
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
            path: `/session`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserSessionFromJSON(jsonValue));
    }

    /**
     * Retrieves details about the current session.
     * Retrieves details about the current session.
     */
    async sessionHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserSession> {
        const response = await this.sessionHandlerRaw(initOverrides);
        return await response.value();
    }

}