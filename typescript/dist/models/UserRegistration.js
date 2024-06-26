"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationToJSON = exports.UserRegistrationFromJSONTyped = exports.UserRegistrationFromJSON = exports.instanceOfUserRegistration = void 0;
/**
 * Check if a given object implements the UserRegistration interface.
 */
function instanceOfUserRegistration(value) {
    if (!('email' in value))
        return false;
    if (!('password' in value))
        return false;
    if (!('realName' in value))
        return false;
    return true;
}
exports.instanceOfUserRegistration = instanceOfUserRegistration;
function UserRegistrationFromJSON(json) {
    return UserRegistrationFromJSONTyped(json, false);
}
exports.UserRegistrationFromJSON = UserRegistrationFromJSON;
function UserRegistrationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'],
        'password': json['password'],
        'realName': json['realName'],
    };
}
exports.UserRegistrationFromJSONTyped = UserRegistrationFromJSONTyped;
function UserRegistrationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
        'password': value['password'],
        'realName': value['realName'],
    };
}
exports.UserRegistrationToJSON = UserRegistrationToJSON;
