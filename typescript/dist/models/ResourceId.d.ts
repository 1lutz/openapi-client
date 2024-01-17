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
import { DatasetIdResourceId } from './DatasetIdResourceId';
import { LayerCollectionResourceId } from './LayerCollectionResourceId';
import { LayerResourceId } from './LayerResourceId';
import { ModelIdResourceId } from './ModelIdResourceId';
import { ProjectResourceId } from './ProjectResourceId';
/**
 * @type ResourceId
 *
 * @export
 */
export type ResourceId = {
    type: 'DatasetId';
} & DatasetIdResourceId | {
    type: 'Layer';
} & LayerResourceId | {
    type: 'LayerCollection';
} & LayerCollectionResourceId | {
    type: 'ModelId';
} & ModelIdResourceId | {
    type: 'Project';
} & ProjectResourceId;
export declare function ResourceIdFromJSON(json: any): ResourceId;
export declare function ResourceIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceId;
export declare function ResourceIdToJSON(value?: ResourceId | null): any;