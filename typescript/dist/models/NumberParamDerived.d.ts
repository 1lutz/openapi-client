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
 * @interface NumberParamDerived
 */
export interface NumberParamDerived {
    /**
     *
     * @type {string}
     * @memberof NumberParamDerived
     */
    attribute: string;
    /**
     *
     * @type {number}
     * @memberof NumberParamDerived
     */
    defaultValue: number;
    /**
     *
     * @type {number}
     * @memberof NumberParamDerived
     */
    factor: number;
    /**
     *
     * @type {string}
     * @memberof NumberParamDerived
     */
    type: NumberParamDerivedTypeEnum;
}
/**
 * @export
 */
export declare const NumberParamDerivedTypeEnum: {
    readonly Derived: "derived";
};
export type NumberParamDerivedTypeEnum = typeof NumberParamDerivedTypeEnum[keyof typeof NumberParamDerivedTypeEnum];
/**
 * Check if a given object implements the NumberParamDerived interface.
 */
export declare function instanceOfNumberParamDerived(value: object): boolean;
export declare function NumberParamDerivedFromJSON(json: any): NumberParamDerived;
export declare function NumberParamDerivedFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumberParamDerived;
export declare function NumberParamDerivedToJSON(value?: NumberParamDerived | null): any;