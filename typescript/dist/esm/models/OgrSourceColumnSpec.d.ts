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
import type { FormatSpecifics } from './FormatSpecifics';
/**
 *
 * @export
 * @interface OgrSourceColumnSpec
 */
export interface OgrSourceColumnSpec {
    /**
     *
     * @type {Array<string>}
     * @memberof OgrSourceColumnSpec
     */
    bool?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof OgrSourceColumnSpec
     */
    datetime?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof OgrSourceColumnSpec
     */
    _float?: Array<string>;
    /**
     *
     * @type {FormatSpecifics}
     * @memberof OgrSourceColumnSpec
     */
    formatSpecifics?: FormatSpecifics | null;
    /**
     *
     * @type {Array<string>}
     * @memberof OgrSourceColumnSpec
     */
    _int?: Array<string>;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof OgrSourceColumnSpec
     */
    rename?: {
        [key: string]: string;
    } | null;
    /**
     *
     * @type {Array<string>}
     * @memberof OgrSourceColumnSpec
     */
    text?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof OgrSourceColumnSpec
     */
    x: string;
    /**
     *
     * @type {string}
     * @memberof OgrSourceColumnSpec
     */
    y?: string | null;
}
/**
 * Check if a given object implements the OgrSourceColumnSpec interface.
 */
export declare function instanceOfOgrSourceColumnSpec(value: object): boolean;
export declare function OgrSourceColumnSpecFromJSON(json: any): OgrSourceColumnSpec;
export declare function OgrSourceColumnSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceColumnSpec;
export declare function OgrSourceColumnSpecToJSON(value?: OgrSourceColumnSpec | null): any;
