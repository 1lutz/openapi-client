"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OGCWFSApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class OGCWFSApi extends runtime.BaseAPI {
    /**
     * Get WFS Capabilities
     * Get WFS Capabilities
     */
    wfsCapabilitiesHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.workflow === null || requestParameters.workflow === undefined) {
                throw new runtime.RequiredError('workflow', 'Required parameter requestParameters.workflow was null or undefined when calling wfsCapabilitiesHandler.');
            }
            if (requestParameters.service === null || requestParameters.service === undefined) {
                throw new runtime.RequiredError('service', 'Required parameter requestParameters.service was null or undefined when calling wfsCapabilitiesHandler.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling wfsCapabilitiesHandler.');
            }
            const queryParameters = {};
            if (requestParameters.version !== undefined) {
                queryParameters['version'] = requestParameters.version;
            }
            if (requestParameters.service !== undefined) {
                queryParameters['service'] = requestParameters.service;
            }
            if (requestParameters.request !== undefined) {
                queryParameters['request'] = requestParameters.request;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wfs/{workflow}?request=GetCapabilities`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters.workflow))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Get WFS Capabilities
     * Get WFS Capabilities
     */
    wfsCapabilitiesHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wfsCapabilitiesHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get WCS Features
     * Get WCS Features
     */
    wfsFeatureHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.workflow === null || requestParameters.workflow === undefined) {
                throw new runtime.RequiredError('workflow', 'Required parameter requestParameters.workflow was null or undefined when calling wfsFeatureHandler.');
            }
            if (requestParameters.service === null || requestParameters.service === undefined) {
                throw new runtime.RequiredError('service', 'Required parameter requestParameters.service was null or undefined when calling wfsFeatureHandler.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling wfsFeatureHandler.');
            }
            if (requestParameters.typeNames === null || requestParameters.typeNames === undefined) {
                throw new runtime.RequiredError('typeNames', 'Required parameter requestParameters.typeNames was null or undefined when calling wfsFeatureHandler.');
            }
            if (requestParameters.bbox === null || requestParameters.bbox === undefined) {
                throw new runtime.RequiredError('bbox', 'Required parameter requestParameters.bbox was null or undefined when calling wfsFeatureHandler.');
            }
            const queryParameters = {};
            if (requestParameters.version !== undefined) {
                queryParameters['version'] = requestParameters.version;
            }
            if (requestParameters.service !== undefined) {
                queryParameters['service'] = requestParameters.service;
            }
            if (requestParameters.request !== undefined) {
                queryParameters['request'] = requestParameters.request;
            }
            if (requestParameters.typeNames !== undefined) {
                queryParameters['typeNames'] = requestParameters.typeNames;
            }
            if (requestParameters.bbox !== undefined) {
                queryParameters['bbox'] = requestParameters.bbox;
            }
            if (requestParameters.time !== undefined) {
                queryParameters['time'] = requestParameters.time;
            }
            if (requestParameters.srsName !== undefined) {
                queryParameters['srsName'] = requestParameters.srsName;
            }
            if (requestParameters.namespaces !== undefined) {
                queryParameters['namespaces'] = requestParameters.namespaces;
            }
            if (requestParameters.count !== undefined) {
                queryParameters['count'] = requestParameters.count;
            }
            if (requestParameters.sortBy !== undefined) {
                queryParameters['sortBy'] = requestParameters.sortBy;
            }
            if (requestParameters.resultType !== undefined) {
                queryParameters['resultType'] = requestParameters.resultType;
            }
            if (requestParameters.filter !== undefined) {
                queryParameters['filter'] = requestParameters.filter;
            }
            if (requestParameters.propertyName !== undefined) {
                queryParameters['propertyName'] = requestParameters.propertyName;
            }
            if (requestParameters.queryResolution !== undefined) {
                queryParameters['queryResolution'] = requestParameters.queryResolution;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wfs/{workflow}?request=GetFeature`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters.workflow))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GeoJsonFromJSON)(jsonValue));
        });
    }
    /**
     * Get WCS Features
     * Get WCS Features
     */
    wfsFeatureHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wfsFeatureHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.OGCWFSApi = OGCWFSApi;