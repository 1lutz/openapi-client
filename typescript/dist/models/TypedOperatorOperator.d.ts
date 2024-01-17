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
 * @interface TypedOperatorOperator
 */
export interface TypedOperatorOperator {
    /**
     *
     * @type {object}
     * @memberof TypedOperatorOperator
     */
    params?: object;
    /**
     *
     * @type {object}
     * @memberof TypedOperatorOperator
     */
    sources?: object;
    /**
     *
     * @type {string}
     * @memberof TypedOperatorOperator
     */
    type: string;
}
/**
 * Check if a given object implements the TypedOperatorOperator interface.
 */
export declare function instanceOfTypedOperatorOperator(value: object): boolean;
export declare function TypedOperatorOperatorFromJSON(json: any): TypedOperatorOperator;
export declare function TypedOperatorOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedOperatorOperator;
export declare function TypedOperatorOperatorToJSON(value?: TypedOperatorOperator | null): any;