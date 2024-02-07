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
import type { MockDatasetDataSourceLoadingInfo } from './MockDatasetDataSourceLoadingInfo';
import type { VectorResultDescriptor } from './VectorResultDescriptor';
/**
 *
 * @export
 * @interface MockMetaDataWithType
 */
export interface MockMetaDataWithType {
    /**
     *
     * @type {MockDatasetDataSourceLoadingInfo}
     * @memberof MockMetaDataWithType
     */
    loadingInfo: MockDatasetDataSourceLoadingInfo;
    /**
     *
     * @type {VectorResultDescriptor}
     * @memberof MockMetaDataWithType
     */
    resultDescriptor: VectorResultDescriptor;
    /**
     *
     * @type {string}
     * @memberof MockMetaDataWithType
     */
    type: MockMetaDataWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const MockMetaDataWithTypeTypeEnum: {
    readonly MockMetaData: "MockMetaData";
    readonly OgrMetaData: "OgrMetaData";
    readonly GdalMetaDataRegular: "GdalMetaDataRegular";
    readonly GdalStatic: "GdalStatic";
    readonly GdalMetadataNetCdfCf: "GdalMetadataNetCdfCf";
    readonly GdalMetaDataList: "GdalMetaDataList";
};
export type MockMetaDataWithTypeTypeEnum = typeof MockMetaDataWithTypeTypeEnum[keyof typeof MockMetaDataWithTypeTypeEnum];
/**
 * Check if a given object implements the MockMetaDataWithType interface.
 */
export declare function instanceOfMockMetaDataWithType(value: object): boolean;
export declare function MockMetaDataWithTypeFromJSON(json: any): MockMetaDataWithType;
export declare function MockMetaDataWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MockMetaDataWithType;
export declare function MockMetaDataWithTypeToJSON(value?: MockMetaDataWithType | null): any;
