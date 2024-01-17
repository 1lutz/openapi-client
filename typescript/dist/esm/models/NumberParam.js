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
import { DerivedNumberWithTypeFromJSONTyped, DerivedNumberWithTypeToJSON, } from './DerivedNumberWithType';
import { StaticNumberParamFromJSONTyped, StaticNumberParamToJSON, } from './StaticNumberParam';
export function NumberParamFromJSON(json) {
    return NumberParamFromJSONTyped(json, false);
}
export function NumberParamFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'derived':
            return Object.assign(Object.assign({}, DerivedNumberWithTypeFromJSONTyped(json, true)), { type: 'derived' });
        case 'static':
            return Object.assign(Object.assign({}, StaticNumberParamFromJSONTyped(json, true)), { type: 'static' });
        default:
            throw new Error(`No variant of NumberParam exists with 'type=${json['type']}'`);
    }
}
export function NumberParamToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'derived':
            return DerivedNumberWithTypeToJSON(value);
        case 'static':
            return StaticNumberParamToJSON(value);
        default:
            throw new Error(`No variant of NumberParam exists with 'type=${value['type']}'`);
    }
}