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
/**
 * @export
 */
export const ResourceIdModelIdTypeEnum = {
    ModelId: 'ModelId'
};
/**
 * Check if a given object implements the ResourceIdModelId interface.
 */
export function instanceOfResourceIdModelId(value) {
    if (!('id' in value))
        return false;
    if (!('type' in value))
        return false;
    return true;
}
export function ResourceIdModelIdFromJSON(json) {
    return ResourceIdModelIdFromJSONTyped(json, false);
}
export function ResourceIdModelIdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'type': json['type'],
    };
}
export function ResourceIdModelIdToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'type': value['type'],
    };
}
