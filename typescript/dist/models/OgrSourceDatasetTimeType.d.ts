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
import type { OgrSourceDatasetTimeTypeNone } from './OgrSourceDatasetTimeTypeNone';
import type { OgrSourceDatasetTimeTypeStart } from './OgrSourceDatasetTimeTypeStart';
import type { OgrSourceDatasetTimeTypeStartDuration } from './OgrSourceDatasetTimeTypeStartDuration';
import type { OgrSourceDatasetTimeTypeStartEnd } from './OgrSourceDatasetTimeTypeStartEnd';
/**
 * @type OgrSourceDatasetTimeType
 *
 * @export
 */
export type OgrSourceDatasetTimeType = {
    type: 'none';
} & OgrSourceDatasetTimeTypeNone | {
    type: 'start';
} & OgrSourceDatasetTimeTypeStart | {
    type: 'startDuration';
} & OgrSourceDatasetTimeTypeStartDuration | {
    type: 'startEnd';
} & OgrSourceDatasetTimeTypeStartEnd;
export declare function OgrSourceDatasetTimeTypeFromJSON(json: any): OgrSourceDatasetTimeType;
export declare function OgrSourceDatasetTimeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDatasetTimeType;
export declare function OgrSourceDatasetTimeTypeToJSON(value?: OgrSourceDatasetTimeType | null): any;
