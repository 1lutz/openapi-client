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
import { OgrSourceTimeFormatFromJSON, OgrSourceTimeFormatToJSON, } from './OgrSourceTimeFormat';
/**
 * @export
 */
export const OgrSourceDatasetTimeTypeStartDurationTypeEnum = {
    StartDuration: 'startDuration'
};
/**
 * Check if a given object implements the OgrSourceDatasetTimeTypeStartDuration interface.
 */
export function instanceOfOgrSourceDatasetTimeTypeStartDuration(value) {
    if (!('durationField' in value))
        return false;
    if (!('startField' in value))
        return false;
    if (!('startFormat' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function OgrSourceDatasetTimeTypeStartDurationFromJSON(json) {
    return OgrSourceDatasetTimeTypeStartDurationFromJSONTyped(json, false);
}
export function OgrSourceDatasetTimeTypeStartDurationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'durationField': json['durationField'],
        'startField': json['startField'],
        'startFormat': OgrSourceTimeFormatFromJSON(json['startFormat']),
        'type': json['type'],
    };
}
export function OgrSourceDatasetTimeTypeStartDurationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'durationField': value['durationField'],
        'startField': value['startField'],
        'startFormat': OgrSourceTimeFormatToJSON(value['startFormat']),
        'type': value['type'],
    };
}
