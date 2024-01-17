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
import * as runtime from '../runtime';
import type { WrappedPlotOutput } from '../models/index';
export interface GetPlotHandlerRequest {
    bbox: string;
    time: string;
    spatialResolution: string;
    id: string;
    crs?: string | null;
}
/**
 *
 */
export declare class PlotsApi extends runtime.BaseAPI {
    /**
     * Generates a plot.  # Example  1. Upload the file `plain_data.csv` with the following content:  ```csv a 1 2 ``` 2. Create a dataset from it using the \"Plain Data\" example at `/dataset`. 3. Create a statistics workflow using the \"Statistics Plot\" example at `/workflow`. 4. Generate the plot with this handler.
     * Generates a plot.
     */
    getPlotHandlerRaw(requestParameters: GetPlotHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WrappedPlotOutput>>;
    /**
     * Generates a plot.  # Example  1. Upload the file `plain_data.csv` with the following content:  ```csv a 1 2 ``` 2. Create a dataset from it using the \"Plain Data\" example at `/dataset`. 3. Create a statistics workflow using the \"Statistics Plot\" example at `/workflow`. 4. Generate the plot with this handler.
     * Generates a plot.
     */
    getPlotHandler(requestParameters: GetPlotHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WrappedPlotOutput>;
}