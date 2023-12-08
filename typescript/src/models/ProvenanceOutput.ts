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
import type { DataId } from './DataId';
import {
    DataIdFromJSON,
    DataIdFromJSONTyped,
    DataIdToJSON,
} from './DataId';
import type { Provenance } from './Provenance';
import {
    ProvenanceFromJSON,
    ProvenanceFromJSONTyped,
    ProvenanceToJSON,
} from './Provenance';

/**
 * 
 * @export
 * @interface ProvenanceOutput
 */
export interface ProvenanceOutput {
    /**
     * 
     * @type {DataId}
     * @memberof ProvenanceOutput
     */
    data: DataId;
    /**
     * 
     * @type {Array<Provenance>}
     * @memberof ProvenanceOutput
     */
    provenance?: Array<Provenance> | null;
}

/**
 * Check if a given object implements the ProvenanceOutput interface.
 */
export function instanceOfProvenanceOutput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ProvenanceOutputFromJSON(json: any): ProvenanceOutput {
    return ProvenanceOutputFromJSONTyped(json, false);
}

export function ProvenanceOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProvenanceOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': DataIdFromJSON(json['data']),
        'provenance': !exists(json, 'provenance') ? undefined : (json['provenance'] === null ? null : (json['provenance'] as Array<any>).map(ProvenanceFromJSON)),
    };
}

export function ProvenanceOutputToJSON(value?: ProvenanceOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': DataIdToJSON(value.data),
        'provenance': value.provenance === undefined ? undefined : (value.provenance === null ? null : (value.provenance as Array<any>).map(ProvenanceToJSON)),
    };
}

