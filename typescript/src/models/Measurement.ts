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

import {
    ClassificationMeasurementWithType,
    instanceOfClassificationMeasurementWithType,
    ClassificationMeasurementWithTypeFromJSON,
    ClassificationMeasurementWithTypeFromJSONTyped,
    ClassificationMeasurementWithTypeToJSON,
} from './ClassificationMeasurementWithType';
import {
    ContinuousMeasurementWithType,
    instanceOfContinuousMeasurementWithType,
    ContinuousMeasurementWithTypeFromJSON,
    ContinuousMeasurementWithTypeFromJSONTyped,
    ContinuousMeasurementWithTypeToJSON,
} from './ContinuousMeasurementWithType';
import {
    UnitlessMeasurement,
    instanceOfUnitlessMeasurement,
    UnitlessMeasurementFromJSON,
    UnitlessMeasurementFromJSONTyped,
    UnitlessMeasurementToJSON,
} from './UnitlessMeasurement';

/**
 * @type Measurement
 * 
 * @export
 */
export type Measurement = { type: 'classification' } & ClassificationMeasurementWithType | { type: 'continuous' } & ContinuousMeasurementWithType | { type: 'unitless' } & UnitlessMeasurement;

export function MeasurementFromJSON(json: any): Measurement {
    return MeasurementFromJSONTyped(json, false);
}

export function MeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Measurement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'classification':
            return {...ClassificationMeasurementWithTypeFromJSONTyped(json, true), type: 'classification'};
        case 'continuous':
            return {...ContinuousMeasurementWithTypeFromJSONTyped(json, true), type: 'continuous'};
        case 'unitless':
            return {...UnitlessMeasurementFromJSONTyped(json, true), type: 'unitless'};
        default:
            throw new Error(`No variant of Measurement exists with 'type=${json['type']}'`);
    }
}

export function MeasurementToJSON(value?: Measurement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'classification':
            return ClassificationMeasurementWithTypeToJSON(value);
        case 'continuous':
            return ContinuousMeasurementWithTypeToJSON(value);
        case 'unitless':
            return UnitlessMeasurementToJSON(value);
        default:
            throw new Error(`No variant of Measurement exists with 'type=${value['type']}'`);
    }

}

