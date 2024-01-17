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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoToJSON = exports.UserInfoFromJSONTyped = exports.UserInfoFromJSON = exports.instanceOfUserInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UserInfo interface.
 */
function instanceOfUserInfo(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfUserInfo = instanceOfUserInfo;
function UserInfoFromJSON(json) {
    return UserInfoFromJSONTyped(json, false);
}
exports.UserInfoFromJSON = UserInfoFromJSON;
function UserInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'id': json['id'],
        'realName': !(0, runtime_1.exists)(json, 'realName') ? undefined : json['realName'],
    };
}
exports.UserInfoFromJSONTyped = UserInfoFromJSONTyped;
function UserInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'id': value.id,
        'realName': value.realName,
    };
}
exports.UserInfoToJSON = UserInfoToJSON;