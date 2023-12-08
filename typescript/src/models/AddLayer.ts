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
import type { Symbology } from './Symbology';
import {
    SymbologyFromJSON,
    SymbologyFromJSONTyped,
    SymbologyToJSON,
} from './Symbology';
import type { Workflow } from './Workflow';
import {
    WorkflowFromJSON,
    WorkflowFromJSONTyped,
    WorkflowToJSON,
} from './Workflow';

/**
 * 
 * @export
 * @interface AddLayer
 */
export interface AddLayer {
    /**
     * 
     * @type {string}
     * @memberof AddLayer
     */
    description: string;
    /**
     * metadata used for loading the data
     * @type {{ [key: string]: string; }}
     * @memberof AddLayer
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof AddLayer
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof AddLayer
     */
    properties?: Array<Array<string>>;
    /**
     * 
     * @type {Symbology}
     * @memberof AddLayer
     */
    symbology?: Symbology | null;
    /**
     * 
     * @type {Workflow}
     * @memberof AddLayer
     */
    workflow: Workflow;
}

/**
 * Check if a given object implements the AddLayer interface.
 */
export function instanceOfAddLayer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "workflow" in value;

    return isInstance;
}

export function AddLayerFromJSON(json: any): AddLayer {
    return AddLayerFromJSONTyped(json, false);
}

export function AddLayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddLayer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': json['name'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'symbology': !exists(json, 'symbology') ? undefined : SymbologyFromJSON(json['symbology']),
        'workflow': WorkflowFromJSON(json['workflow']),
    };
}

export function AddLayerToJSON(value?: AddLayer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'metadata': value.metadata,
        'name': value.name,
        'properties': value.properties,
        'symbology': SymbologyToJSON(value.symbology),
        'workflow': WorkflowToJSON(value.workflow),
    };
}

