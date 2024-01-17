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
 *
 * @export
 * @interface InternalDataId
 */
export interface InternalDataId {
    /**
     *
     * @type {string}
     * @memberof InternalDataId
     */
    datasetId: string;
    /**
     *
     * @type {string}
     * @memberof InternalDataId
     */
    type: InternalDataIdTypeEnum;
}
/**
 * @export
 */
export declare const InternalDataIdTypeEnum: {
    readonly Internal: "internal";
    readonly External: "external";
};
export type InternalDataIdTypeEnum = typeof InternalDataIdTypeEnum[keyof typeof InternalDataIdTypeEnum];
/**
 * Check if a given object implements the InternalDataId interface.
 */
export declare function instanceOfInternalDataId(value: object): boolean;
export declare function InternalDataIdFromJSON(json: any): InternalDataId;
export declare function InternalDataIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalDataId;
export declare function InternalDataIdToJSON(value?: InternalDataId | null): any;