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
import { LineSymbologyWithType } from './LineSymbologyWithType';
import { PointSymbologyWithType } from './PointSymbologyWithType';
import { PolygonSymbologyWithType } from './PolygonSymbologyWithType';
import { RasterSymbologyWithType } from './RasterSymbologyWithType';
/**
 * @type Symbology
 *
 * @export
 */
export type Symbology = {
    type: 'line';
} & LineSymbologyWithType | {
    type: 'point';
} & PointSymbologyWithType | {
    type: 'polygon';
} & PolygonSymbologyWithType | {
    type: 'raster';
} & RasterSymbologyWithType;
export declare function SymbologyFromJSON(json: any): Symbology;
export declare function SymbologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Symbology;
export declare function SymbologyToJSON(value?: Symbology | null): any;