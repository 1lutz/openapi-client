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


import * as runtime from '../runtime';
import type {
  AutoCreateDataset,
  CreateDataset,
  CreateDatasetHandler200Response,
  Dataset,
  DatasetListing,
  ErrorResponse,
  MetaDataDefinition,
  MetaDataSuggestion,
  OrderBy,
  Provenances,
  SuggestMetaData,
  Symbology,
  UpdateDataset,
  Volume,
} from '../models/index';
import {
    AutoCreateDatasetFromJSON,
    AutoCreateDatasetToJSON,
    CreateDatasetFromJSON,
    CreateDatasetToJSON,
    CreateDatasetHandler200ResponseFromJSON,
    CreateDatasetHandler200ResponseToJSON,
    DatasetFromJSON,
    DatasetToJSON,
    DatasetListingFromJSON,
    DatasetListingToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    MetaDataDefinitionFromJSON,
    MetaDataDefinitionToJSON,
    MetaDataSuggestionFromJSON,
    MetaDataSuggestionToJSON,
    OrderByFromJSON,
    OrderByToJSON,
    ProvenancesFromJSON,
    ProvenancesToJSON,
    SuggestMetaDataFromJSON,
    SuggestMetaDataToJSON,
    SymbologyFromJSON,
    SymbologyToJSON,
    UpdateDatasetFromJSON,
    UpdateDatasetToJSON,
    VolumeFromJSON,
    VolumeToJSON,
} from '../models/index';

export interface AutoCreateDatasetHandlerRequest {
    autoCreateDataset: AutoCreateDataset;
}

export interface CreateDatasetHandlerRequest {
    createDataset: CreateDataset;
}

export interface DeleteDatasetHandlerRequest {
    dataset: string;
}

export interface GetDatasetHandlerRequest {
    dataset: string;
}

export interface GetLoadingInfoHandlerRequest {
    dataset: string;
}

export interface ListDatasetsHandlerRequest {
    order: OrderBy;
    offset: number;
    limit: number;
    filter?: string | null;
    tags?: Array<string> | null;
}

export interface SuggestMetaDataHandlerRequest {
    suggestMetaData: SuggestMetaData;
}

export interface UpdateDatasetHandlerRequest {
    dataset: string;
    updateDataset: UpdateDataset;
}

export interface UpdateDatasetProvenanceHandlerRequest {
    dataset: string;
    provenances: Provenances;
}

export interface UpdateDatasetSymbologyHandlerRequest {
    dataset: string;
    symbology: Symbology;
}

/**
 * 
 */
export class DatasetsApi extends runtime.BaseAPI {

    /**
     * Creates a new dataset using previously uploaded files. The format of the files will be automatically detected when possible.
     * Creates a new dataset using previously uploaded files.
     */
    async autoCreateDatasetHandlerRaw(requestParameters: AutoCreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDatasetHandler200Response>> {
        if (requestParameters.autoCreateDataset === null || requestParameters.autoCreateDataset === undefined) {
            throw new runtime.RequiredError('autoCreateDataset','Required parameter requestParameters.autoCreateDataset was null or undefined when calling autoCreateDatasetHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/auto`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AutoCreateDatasetToJSON(requestParameters.autoCreateDataset),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateDatasetHandler200ResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new dataset using previously uploaded files. The format of the files will be automatically detected when possible.
     * Creates a new dataset using previously uploaded files.
     */
    async autoCreateDatasetHandler(requestParameters: AutoCreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDatasetHandler200Response> {
        const response = await this.autoCreateDatasetHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     */
    async createDatasetHandlerRaw(requestParameters: CreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateDatasetHandler200Response>> {
        if (requestParameters.createDataset === null || requestParameters.createDataset === undefined) {
            throw new runtime.RequiredError('createDataset','Required parameter requestParameters.createDataset was null or undefined when calling createDatasetHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateDatasetToJSON(requestParameters.createDataset),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateDatasetHandler200ResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     * Creates a new dataset referencing files. Users can reference previously uploaded files. Admins can reference files from a volume.
     */
    async createDatasetHandler(requestParameters: CreateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateDatasetHandler200Response> {
        const response = await this.createDatasetHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a dataset
     * Delete a dataset
     */
    async deleteDatasetHandlerRaw(requestParameters: DeleteDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
            throw new runtime.RequiredError('dataset','Required parameter requestParameters.dataset was null or undefined when calling deleteDatasetHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/{dataset}`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a dataset
     * Delete a dataset
     */
    async deleteDatasetHandler(requestParameters: DeleteDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDatasetHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves details about a dataset using the internal name.
     * Retrieves details about a dataset using the internal name.
     */
    async getDatasetHandlerRaw(requestParameters: GetDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Dataset>> {
        if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
            throw new runtime.RequiredError('dataset','Required parameter requestParameters.dataset was null or undefined when calling getDatasetHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/{dataset}`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DatasetFromJSON(jsonValue));
    }

    /**
     * Retrieves details about a dataset using the internal name.
     * Retrieves details about a dataset using the internal name.
     */
    async getDatasetHandler(requestParameters: GetDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Dataset> {
        const response = await this.getDatasetHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the loading information of a dataset
     * Retrieves the loading information of a dataset
     */
    async getLoadingInfoHandlerRaw(requestParameters: GetLoadingInfoHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetaDataDefinition>> {
        if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
            throw new runtime.RequiredError('dataset','Required parameter requestParameters.dataset was null or undefined when calling getLoadingInfoHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/{dataset}/loadingInfo`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaDataDefinitionFromJSON(jsonValue));
    }

    /**
     * Retrieves the loading information of a dataset
     * Retrieves the loading information of a dataset
     */
    async getLoadingInfoHandler(requestParameters: GetLoadingInfoHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetaDataDefinition> {
        const response = await this.getLoadingInfoHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists available datasets.
     * Lists available datasets.
     */
    async listDatasetsHandlerRaw(requestParameters: ListDatasetsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<DatasetListing>>> {
        if (requestParameters.order === null || requestParameters.order === undefined) {
            throw new runtime.RequiredError('order','Required parameter requestParameters.order was null or undefined when calling listDatasetsHandler.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling listDatasetsHandler.');
        }

        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling listDatasetsHandler.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.tags) {
            queryParameters['tags'] = requestParameters.tags;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/datasets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DatasetListingFromJSON));
    }

    /**
     * Lists available datasets.
     * Lists available datasets.
     */
    async listDatasetsHandler(requestParameters: ListDatasetsHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<DatasetListing>> {
        const response = await this.listDatasetsHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists available volumes.
     * Lists available volumes.
     */
    async listVolumesHandlerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Volume>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/volumes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VolumeFromJSON));
    }

    /**
     * Lists available volumes.
     * Lists available volumes.
     */
    async listVolumesHandler(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Volume>> {
        const response = await this.listVolumesHandlerRaw(initOverrides);
        return await response.value();
    }

    /**
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it. Tries to automatically detect the main file and layer name if not specified.
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it.
     */
    async suggestMetaDataHandlerRaw(requestParameters: SuggestMetaDataHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MetaDataSuggestion>> {
        if (requestParameters.suggestMetaData === null || requestParameters.suggestMetaData === undefined) {
            throw new runtime.RequiredError('suggestMetaData','Required parameter requestParameters.suggestMetaData was null or undefined when calling suggestMetaDataHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/suggest`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SuggestMetaDataToJSON(requestParameters.suggestMetaData),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaDataSuggestionFromJSON(jsonValue));
    }

    /**
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it. Tries to automatically detect the main file and layer name if not specified.
     * Inspects an upload and suggests metadata that can be used when creating a new dataset based on it.
     */
    async suggestMetaDataHandler(requestParameters: SuggestMetaDataHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MetaDataSuggestion> {
        const response = await this.suggestMetaDataHandlerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update details about a dataset using the internal name.
     * Update details about a dataset using the internal name.
     */
    async updateDatasetHandlerRaw(requestParameters: UpdateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
            throw new runtime.RequiredError('dataset','Required parameter requestParameters.dataset was null or undefined when calling updateDatasetHandler.');
        }

        if (requestParameters.updateDataset === null || requestParameters.updateDataset === undefined) {
            throw new runtime.RequiredError('updateDataset','Required parameter requestParameters.updateDataset was null or undefined when calling updateDatasetHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/{dataset}`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDatasetToJSON(requestParameters.updateDataset),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update details about a dataset using the internal name.
     * Update details about a dataset using the internal name.
     */
    async updateDatasetHandler(requestParameters: UpdateDatasetHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateDatasetHandlerRaw(requestParameters, initOverrides);
    }

    /**
     */
    async updateDatasetProvenanceHandlerRaw(requestParameters: UpdateDatasetProvenanceHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
            throw new runtime.RequiredError('dataset','Required parameter requestParameters.dataset was null or undefined when calling updateDatasetProvenanceHandler.');
        }

        if (requestParameters.provenances === null || requestParameters.provenances === undefined) {
            throw new runtime.RequiredError('provenances','Required parameter requestParameters.provenances was null or undefined when calling updateDatasetProvenanceHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/{dataset}/provenance`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProvenancesToJSON(requestParameters.provenances),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateDatasetProvenanceHandler(requestParameters: UpdateDatasetProvenanceHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateDatasetProvenanceHandlerRaw(requestParameters, initOverrides);
    }

    /**
     * Updates the dataset\'s symbology
     * Updates the dataset\'s symbology
     */
    async updateDatasetSymbologyHandlerRaw(requestParameters: UpdateDatasetSymbologyHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.dataset === null || requestParameters.dataset === undefined) {
            throw new runtime.RequiredError('dataset','Required parameter requestParameters.dataset was null or undefined when calling updateDatasetSymbologyHandler.');
        }

        if (requestParameters.symbology === null || requestParameters.symbology === undefined) {
            throw new runtime.RequiredError('symbology','Required parameter requestParameters.symbology was null or undefined when calling updateDatasetSymbologyHandler.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("session_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/dataset/{dataset}/symbology`.replace(`{${"dataset"}}`, encodeURIComponent(String(requestParameters.dataset))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SymbologyToJSON(requestParameters.symbology),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates the dataset\'s symbology
     * Updates the dataset\'s symbology
     */
    async updateDatasetSymbologyHandler(requestParameters: UpdateDatasetSymbologyHandlerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateDatasetSymbologyHandlerRaw(requestParameters, initOverrides);
    }

}
