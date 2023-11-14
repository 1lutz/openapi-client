# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.7.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
from inspect import getfullargspec
import json
import pprint
import re  # noqa: F401

from typing import Any, List, Optional
from pydantic import BaseModel, Field, StrictStr, ValidationError, validator
from geoengine_openapi_client.models.classification_measurement_with_type import ClassificationMeasurementWithType
from geoengine_openapi_client.models.continuous_measurement_with_type import ContinuousMeasurementWithType
from geoengine_openapi_client.models.unitless_measurement import UnitlessMeasurement
from typing import Union, Any, List, TYPE_CHECKING
from pydantic import StrictStr, Field

MEASUREMENT_ONE_OF_SCHEMAS = ["ClassificationMeasurementWithType", "ContinuousMeasurementWithType", "UnitlessMeasurement"]

class Measurement(BaseModel):
    """
    Measurement
    """
    # data type: UnitlessMeasurement
    oneof_schema_1_validator: Optional[UnitlessMeasurement] = None
    # data type: ContinuousMeasurementWithType
    oneof_schema_2_validator: Optional[ContinuousMeasurementWithType] = None
    # data type: ClassificationMeasurementWithType
    oneof_schema_3_validator: Optional[ClassificationMeasurementWithType] = None
    if TYPE_CHECKING:
        actual_instance: Union[ClassificationMeasurementWithType, ContinuousMeasurementWithType, UnitlessMeasurement]
    else:
        actual_instance: Any
    one_of_schemas: List[str] = Field(MEASUREMENT_ONE_OF_SCHEMAS, const=True)

    class Config:
        validate_assignment = True

    discriminator_value_class_map = {
    }

    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError("If a position argument is used, only 1 is allowed to set `actual_instance`")
            if kwargs:
                raise ValueError("If a position argument is used, keyword arguments cannot be used.")
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    @validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = Measurement.construct()
        error_messages = []
        match = 0
        # validate data type: UnitlessMeasurement
        if not isinstance(v, UnitlessMeasurement):
            error_messages.append(f"Error! Input type `{type(v)}` is not `UnitlessMeasurement`")
        else:
            match += 1
        # validate data type: ContinuousMeasurementWithType
        if not isinstance(v, ContinuousMeasurementWithType):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ContinuousMeasurementWithType`")
        else:
            match += 1
        # validate data type: ClassificationMeasurementWithType
        if not isinstance(v, ClassificationMeasurementWithType):
            error_messages.append(f"Error! Input type `{type(v)}` is not `ClassificationMeasurementWithType`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in Measurement with oneOf schemas: ClassificationMeasurementWithType, ContinuousMeasurementWithType, UnitlessMeasurement. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in Measurement with oneOf schemas: ClassificationMeasurementWithType, ContinuousMeasurementWithType, UnitlessMeasurement. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: dict) -> Measurement:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Measurement:
        """Returns the object represented by the json string"""
        instance = Measurement.construct()
        error_messages = []
        match = 0

        # use oneOf discriminator to lookup the data type
        _data_type = json.loads(json_str).get("type")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `type` in the input.")

        # check if data type is `ClassificationMeasurementWithType`
        if _data_type == "ClassificationMeasurementWithType":
            instance.actual_instance = ClassificationMeasurementWithType.from_json(json_str)
            return instance

        # check if data type is `ContinuousMeasurementWithType`
        if _data_type == "ContinuousMeasurementWithType":
            instance.actual_instance = ContinuousMeasurementWithType.from_json(json_str)
            return instance

        # check if data type is `UnitlessMeasurement`
        if _data_type == "UnitlessMeasurement":
            instance.actual_instance = UnitlessMeasurement.from_json(json_str)
            return instance

        # check if data type is `ClassificationMeasurementWithType`
        if _data_type == "classification":
            instance.actual_instance = ClassificationMeasurementWithType.from_json(json_str)
            return instance

        # check if data type is `ContinuousMeasurementWithType`
        if _data_type == "continuous":
            instance.actual_instance = ContinuousMeasurementWithType.from_json(json_str)
            return instance

        # check if data type is `UnitlessMeasurement`
        if _data_type == "unitless":
            instance.actual_instance = UnitlessMeasurement.from_json(json_str)
            return instance

        # deserialize data into UnitlessMeasurement
        try:
            instance.actual_instance = UnitlessMeasurement.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ContinuousMeasurementWithType
        try:
            instance.actual_instance = ContinuousMeasurementWithType.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into ClassificationMeasurementWithType
        try:
            instance.actual_instance = ClassificationMeasurementWithType.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into Measurement with oneOf schemas: ClassificationMeasurementWithType, ContinuousMeasurementWithType, UnitlessMeasurement. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into Measurement with oneOf schemas: ClassificationMeasurementWithType, ContinuousMeasurementWithType, UnitlessMeasurement. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        to_json = getattr(self.actual_instance, "to_json", None)
        if callable(to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> dict:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        to_dict = getattr(self.actual_instance, "to_dict", None)
        if callable(to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.dict())

