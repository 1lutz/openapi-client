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
import type { PlotOutputFormat } from './PlotOutputFormat';
import {
    PlotOutputFormatFromJSON,
    PlotOutputFormatFromJSONTyped,
    PlotOutputFormatToJSON,
} from './PlotOutputFormat';

/**
 * 
 * @export
 * @interface WrappedPlotOutput
 */
export interface WrappedPlotOutput {
    /**
     * 
     * @type {object}
     * @memberof WrappedPlotOutput
     */
    data: object;
    /**
     * 
     * @type {PlotOutputFormat}
     * @memberof WrappedPlotOutput
     */
    outputFormat: PlotOutputFormat;
    /**
     * 
     * @type {string}
     * @memberof WrappedPlotOutput
     */
    plotType: string;
}

/**
 * Check if a given object implements the WrappedPlotOutput interface.
 */
export function instanceOfWrappedPlotOutput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "outputFormat" in value;
    isInstance = isInstance && "plotType" in value;

    return isInstance;
}

export function WrappedPlotOutputFromJSON(json: any): WrappedPlotOutput {
    return WrappedPlotOutputFromJSONTyped(json, false);
}

export function WrappedPlotOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): WrappedPlotOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': json['data'],
        'outputFormat': PlotOutputFormatFromJSON(json['outputFormat']),
        'plotType': json['plotType'],
    };
}

export function WrappedPlotOutputToJSON(value?: WrappedPlotOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'outputFormat': PlotOutputFormatToJSON(value.outputFormat),
        'plotType': value.plotType,
    };
}

