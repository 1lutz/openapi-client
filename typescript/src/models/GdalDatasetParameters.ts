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

import { mapValues } from '../runtime';
import type { FileNotFoundHandling } from './FileNotFoundHandling';
import {
    FileNotFoundHandlingFromJSON,
    FileNotFoundHandlingFromJSONTyped,
    FileNotFoundHandlingToJSON,
} from './FileNotFoundHandling';
import type { GdalDatasetGeoTransform } from './GdalDatasetGeoTransform';
import {
    GdalDatasetGeoTransformFromJSON,
    GdalDatasetGeoTransformFromJSONTyped,
    GdalDatasetGeoTransformToJSON,
} from './GdalDatasetGeoTransform';
import type { GdalMetadataMapping } from './GdalMetadataMapping';
import {
    GdalMetadataMappingFromJSON,
    GdalMetadataMappingFromJSONTyped,
    GdalMetadataMappingToJSON,
} from './GdalMetadataMapping';

/**
 * Parameters for loading data using Gdal
 * @export
 * @interface GdalDatasetParameters
 */
export interface GdalDatasetParameters {
    /**
     * 
     * @type {boolean}
     * @memberof GdalDatasetParameters
     */
    allowAlphabandAsMask?: boolean;
    /**
     * 
     * @type {FileNotFoundHandling}
     * @memberof GdalDatasetParameters
     */
    fileNotFoundHandling: FileNotFoundHandling;
    /**
     * 
     * @type {string}
     * @memberof GdalDatasetParameters
     */
    filePath: string;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof GdalDatasetParameters
     */
    gdalConfigOptions?: Array<Array<string>>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GdalDatasetParameters
     */
    gdalOpenOptions?: Array<string>;
    /**
     * 
     * @type {GdalDatasetGeoTransform}
     * @memberof GdalDatasetParameters
     */
    geoTransform: GdalDatasetGeoTransform;
    /**
     * 
     * @type {number}
     * @memberof GdalDatasetParameters
     */
    height: number;
    /**
     * 
     * @type {number}
     * @memberof GdalDatasetParameters
     */
    noDataValue?: number;
    /**
     * 
     * @type {Array<GdalMetadataMapping>}
     * @memberof GdalDatasetParameters
     */
    propertiesMapping?: Array<GdalMetadataMapping>;
    /**
     * 
     * @type {number}
     * @memberof GdalDatasetParameters
     */
    rasterbandChannel: number;
    /**
     * 
     * @type {number}
     * @memberof GdalDatasetParameters
     */
    width: number;
}

/**
 * Check if a given object implements the GdalDatasetParameters interface.
 */
export function instanceOfGdalDatasetParameters(value: object): boolean {
    if (!('fileNotFoundHandling' in value)) return false;
    if (!('filePath' in value)) return false;
    if (!('geoTransform' in value)) return false;
    if (!('height' in value)) return false;
    if (!('rasterbandChannel' in value)) return false;
    if (!('width' in value)) return false;
    return true;
}

export function GdalDatasetParametersFromJSON(json: any): GdalDatasetParameters {
    return GdalDatasetParametersFromJSONTyped(json, false);
}

export function GdalDatasetParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalDatasetParameters {
    if (json == null) {
        return json;
    }
    return {
        
        'allowAlphabandAsMask': json['allowAlphabandAsMask'] == null ? undefined : json['allowAlphabandAsMask'],
        'fileNotFoundHandling': FileNotFoundHandlingFromJSON(json['fileNotFoundHandling']),
        'filePath': json['filePath'],
        'gdalConfigOptions': json['gdalConfigOptions'] == null ? undefined : json['gdalConfigOptions'],
        'gdalOpenOptions': json['gdalOpenOptions'] == null ? undefined : json['gdalOpenOptions'],
        'geoTransform': GdalDatasetGeoTransformFromJSON(json['geoTransform']),
        'height': json['height'],
        'noDataValue': json['noDataValue'] == null ? undefined : json['noDataValue'],
        'propertiesMapping': json['propertiesMapping'] == null ? undefined : ((json['propertiesMapping'] as Array<any>).map(GdalMetadataMappingFromJSON)),
        'rasterbandChannel': json['rasterbandChannel'],
        'width': json['width'],
    };
}

export function GdalDatasetParametersToJSON(value?: GdalDatasetParameters | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'allowAlphabandAsMask': value['allowAlphabandAsMask'],
        'fileNotFoundHandling': FileNotFoundHandlingToJSON(value['fileNotFoundHandling']),
        'filePath': value['filePath'],
        'gdalConfigOptions': value['gdalConfigOptions'],
        'gdalOpenOptions': value['gdalOpenOptions'],
        'geoTransform': GdalDatasetGeoTransformToJSON(value['geoTransform']),
        'height': value['height'],
        'noDataValue': value['noDataValue'],
        'propertiesMapping': value['propertiesMapping'] == null ? undefined : ((value['propertiesMapping'] as Array<any>).map(GdalMetadataMappingToJSON)),
        'rasterbandChannel': value['rasterbandChannel'],
        'width': value['width'],
    };
}

