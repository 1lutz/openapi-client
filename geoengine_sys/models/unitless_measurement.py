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
import pprint
import re  # noqa: F401
import json



from pydantic import BaseModel, Field, StrictStr, validator

class UnitlessMeasurement(BaseModel):
    """
    UnitlessMeasurement
    """
    type: StrictStr = Field(...)
    __properties = ["type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('unitless', 'continuous', 'classification'):
            raise ValueError("must be one of enum values ('unitless', 'continuous', 'classification')")
        return value

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> UnitlessMeasurement:
        """Create an instance of UnitlessMeasurement from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> UnitlessMeasurement:
        """Create an instance of UnitlessMeasurement from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return UnitlessMeasurement.parse_obj(obj)

        _obj = UnitlessMeasurement.parse_obj({
            "type": obj.get("type")
        })
        return _obj


