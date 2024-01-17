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
/**
 * Check if a given object implements the DateTimeParseFormat interface.
 */
export function instanceOfDateTimeParseFormat(value) {
    let isInstance = true;
    isInstance = isInstance && "fmt" in value;
    isInstance = isInstance && "hasTime" in value;
    isInstance = isInstance && "hasTz" in value;
    return isInstance;
}
export function DateTimeParseFormatFromJSON(json) {
    return DateTimeParseFormatFromJSONTyped(json, false);
}
export function DateTimeParseFormatFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fmt': json['fmt'],
        'hasTime': json['has_time'],
        'hasTz': json['has_tz'],
    };
}
export function DateTimeParseFormatToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fmt': value.fmt,
        'has_time': value.hasTime,
        'has_tz': value.hasTz,
    };
}