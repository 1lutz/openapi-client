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
import { UnixTimeStampTypeFromJSON, UnixTimeStampTypeToJSON, } from './UnixTimeStampType';
/**
 * @export
 */
export const OgrSourceTimeFormatUnixTimeStampFormatEnum = {
    UnixTimeStamp: 'unixTimeStamp'
};
/**
 * Check if a given object implements the OgrSourceTimeFormatUnixTimeStamp interface.
 */
export function instanceOfOgrSourceTimeFormatUnixTimeStamp(value) {
    if (!('format' in value))
        return false;
    if (!('timestampType' in value))
        return false;
    return true;
}
export function OgrSourceTimeFormatUnixTimeStampFromJSON(json) {
    return OgrSourceTimeFormatUnixTimeStampFromJSONTyped(json, false);
}
export function OgrSourceTimeFormatUnixTimeStampFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'format': json['format'],
        'timestampType': UnixTimeStampTypeFromJSON(json['timestampType']),
    };
}
export function OgrSourceTimeFormatUnixTimeStampToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'format': value['format'],
        'timestampType': UnixTimeStampTypeToJSON(value['timestampType']),
    };
}
