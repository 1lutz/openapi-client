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
import { OgrSourceDurationSpecFromJSON, OgrSourceDurationSpecToJSON, } from './OgrSourceDurationSpec';
import { OgrSourceTimeFormatFromJSON, OgrSourceTimeFormatToJSON, } from './OgrSourceTimeFormat';
/**
 * @export
 */
export const OgrSourceDatasetTimeTypeStartTypeEnum = {
    Start: 'start'
};
/**
 * Check if a given object implements the OgrSourceDatasetTimeTypeStart interface.
 */
export function instanceOfOgrSourceDatasetTimeTypeStart(value) {
    if (!('duration' in value))
        return false;
    if (!('startField' in value))
        return false;
    if (!('startFormat' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function OgrSourceDatasetTimeTypeStartFromJSON(json) {
    return OgrSourceDatasetTimeTypeStartFromJSONTyped(json, false);
}
export function OgrSourceDatasetTimeTypeStartFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'duration': OgrSourceDurationSpecFromJSON(json['duration']),
        'startField': json['startField'],
        'startFormat': OgrSourceTimeFormatFromJSON(json['startFormat']),
        'type': json['type'],
    };
}
export function OgrSourceDatasetTimeTypeStartToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'duration': OgrSourceDurationSpecToJSON(value['duration']),
        'startField': value['startField'],
        'startFormat': OgrSourceTimeFormatToJSON(value['startFormat']),
        'type': value['type'],
    };
}
