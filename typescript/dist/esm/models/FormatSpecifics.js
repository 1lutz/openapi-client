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
import { instanceOfFormatSpecificsOneOf, FormatSpecificsOneOfFromJSONTyped, FormatSpecificsOneOfToJSON, } from './FormatSpecificsOneOf';
export function FormatSpecificsFromJSON(json) {
    return FormatSpecificsFromJSONTyped(json, false);
}
export function FormatSpecificsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign({}, FormatSpecificsOneOfFromJSONTyped(json, true));
}
export function FormatSpecificsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (instanceOfFormatSpecificsOneOf(value)) {
        return FormatSpecificsOneOfToJSON(value);
    }
    return {};
}