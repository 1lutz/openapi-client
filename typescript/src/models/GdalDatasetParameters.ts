/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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
    gdalConfigOptions?: Array<Array<string>> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GdalDatasetParameters
     */
    gdalOpenOptions?: Array<string> | null;
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
    noDataValue?: number | null;
    /**
     * 
     * @type {Array<GdalMetadataMapping>}
     * @memberof GdalDatasetParameters
     */
    propertiesMapping?: Array<GdalMetadataMapping> | null;
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
    let isInstance = true;
    isInstance = isInstance && "fileNotFoundHandling" in value;
    isInstance = isInstance && "filePath" in value;
    isInstance = isInstance && "geoTransform" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "rasterbandChannel" in value;
    isInstance = isInstance && "width" in value;

    return isInstance;
}

export function GdalDatasetParametersFromJSON(json: any): GdalDatasetParameters {
    return GdalDatasetParametersFromJSONTyped(json, false);
}

export function GdalDatasetParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GdalDatasetParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowAlphabandAsMask': !exists(json, 'allowAlphabandAsMask') ? undefined : json['allowAlphabandAsMask'],
        'fileNotFoundHandling': FileNotFoundHandlingFromJSON(json['fileNotFoundHandling']),
        'filePath': json['filePath'],
        'gdalConfigOptions': !exists(json, 'gdalConfigOptions') ? undefined : json['gdalConfigOptions'],
        'gdalOpenOptions': !exists(json, 'gdalOpenOptions') ? undefined : json['gdalOpenOptions'],
        'geoTransform': GdalDatasetGeoTransformFromJSON(json['geoTransform']),
        'height': json['height'],
        'noDataValue': !exists(json, 'noDataValue') ? undefined : json['noDataValue'],
        'propertiesMapping': !exists(json, 'propertiesMapping') ? undefined : (json['propertiesMapping'] === null ? null : (json['propertiesMapping'] as Array<any>).map(GdalMetadataMappingFromJSON)),
        'rasterbandChannel': json['rasterbandChannel'],
        'width': json['width'],
    };
}

export function GdalDatasetParametersToJSON(value?: GdalDatasetParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowAlphabandAsMask': value.allowAlphabandAsMask,
        'fileNotFoundHandling': FileNotFoundHandlingToJSON(value.fileNotFoundHandling),
        'filePath': value.filePath,
        'gdalConfigOptions': value.gdalConfigOptions,
        'gdalOpenOptions': value.gdalOpenOptions,
        'geoTransform': GdalDatasetGeoTransformToJSON(value.geoTransform),
        'height': value.height,
        'noDataValue': value.noDataValue,
        'propertiesMapping': value.propertiesMapping === undefined ? undefined : (value.propertiesMapping === null ? null : (value.propertiesMapping as Array<any>).map(GdalMetadataMappingToJSON)),
        'rasterbandChannel': value.rasterbandChannel,
        'width': value.width,
    };
}

