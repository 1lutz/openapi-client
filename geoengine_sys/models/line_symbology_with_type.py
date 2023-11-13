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


from typing import Optional
from pydantic import BaseModel, Field, StrictBool, StrictStr, validator
from geoengine_sys.models.stroke_param import StrokeParam
from geoengine_sys.models.text_symbology import TextSymbology

class LineSymbologyWithType(BaseModel):
    """
    LineSymbologyWithType
    """
    auto_simplified: StrictBool = Field(..., alias="autoSimplified")
    stroke: StrokeParam = Field(...)
    text: Optional[TextSymbology] = None
    type: StrictStr = Field(...)
    __properties = ["autoSimplified", "stroke", "text", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('line'):
            raise ValueError("must be one of enum values ('line')")
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
    def from_json(cls, json_str: str) -> LineSymbologyWithType:
        """Create an instance of LineSymbologyWithType from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of stroke
        if self.stroke:
            _dict['stroke'] = self.stroke.to_dict()
        # override the default output from pydantic by calling `to_dict()` of text
        if self.text:
            _dict['text'] = self.text.to_dict()
        # set to None if text (nullable) is None
        # and __fields_set__ contains the field
        if self.text is None and "text" in self.__fields_set__:
            _dict['text'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> LineSymbologyWithType:
        """Create an instance of LineSymbologyWithType from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return LineSymbologyWithType.parse_obj(obj)

        _obj = LineSymbologyWithType.parse_obj({
            "auto_simplified": obj.get("autoSimplified"),
            "stroke": StrokeParam.from_dict(obj.get("stroke")) if obj.get("stroke") is not None else None,
            "text": TextSymbology.from_dict(obj.get("text")) if obj.get("text") is not None else None,
            "type": obj.get("type")
        })
        return _obj


