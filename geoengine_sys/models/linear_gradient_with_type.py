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


from typing import List
from pydantic import BaseModel, Field, StrictInt, StrictStr, conlist, validator
from geoengine_sys.models.breakpoint import Breakpoint

class LinearGradientWithType(BaseModel):
    """
    LinearGradientWithType
    """
    # Note: need to remove default_color
    over_color: conlist(StrictInt, max_items=4, min_items=4) = Field(..., alias="overColor")
    under_color: conlist(StrictInt, max_items=4, min_items=4) = Field(..., alias="underColor")
    breakpoints: conlist(Breakpoint) = Field(...)
    no_data_color: conlist(StrictInt, max_items=4, min_items=4) = Field(..., alias="noDataColor")
    type: StrictStr = Field(...)
    __properties = ["defaultColor", "overColor", "underColor", "breakpoints", "noDataColor", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('linearGradient', 'logarithmicGradient', 'palette', 'rgba'):
            raise ValueError("must be one of enum values ('linearGradient', 'logarithmicGradient', 'palette', 'rgba')")
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
    def from_json(cls, json_str: str) -> LinearGradientWithType:
        """Create an instance of LinearGradientWithType from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of each item in breakpoints (list)
        _items = []
        if self.breakpoints:
            for _item in self.breakpoints:
                if _item:
                    _items.append(_item.to_dict())
            _dict['breakpoints'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> LinearGradientWithType:
        """Create an instance of LinearGradientWithType from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return LinearGradientWithType.parse_obj(obj)

        _obj = LinearGradientWithType.parse_obj({
            "default_color": obj.get("defaultColor"),
            "over_color": obj.get("overColor"),
            "under_color": obj.get("underColor"),
            "breakpoints": [Breakpoint.from_dict(_item) for _item in obj.get("breakpoints")] if obj.get("breakpoints") is not None else None,
            "no_data_color": obj.get("noDataColor"),
            "type": obj.get("type")
        })
        return _obj


