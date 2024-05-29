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
 *
 * @export
 * @interface MeasurementContinuous
 */
export interface MeasurementContinuous {
    /**
     *
     * @type {string}
     * @memberof MeasurementContinuous
     */
    measurement: string;
    /**
     *
     * @type {string}
     * @memberof MeasurementContinuous
     */
    type: MeasurementContinuousTypeEnum;
    /**
     *
     * @type {string}
     * @memberof MeasurementContinuous
     */
    unit?: string;
}
/**
 * @export
 */
export declare const MeasurementContinuousTypeEnum: {
    readonly Continuous: "continuous";
};
export type MeasurementContinuousTypeEnum = typeof MeasurementContinuousTypeEnum[keyof typeof MeasurementContinuousTypeEnum];
/**
 * Check if a given object implements the MeasurementContinuous interface.
 */
export declare function instanceOfMeasurementContinuous(value: object): boolean;
export declare function MeasurementContinuousFromJSON(json: any): MeasurementContinuous;
export declare function MeasurementContinuousFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasurementContinuous;
export declare function MeasurementContinuousToJSON(value?: MeasurementContinuous | null): any;
