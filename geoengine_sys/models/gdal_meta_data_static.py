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
from pydantic import BaseModel, Field, conint
from geoengine_sys.models.gdal_dataset_parameters import GdalDatasetParameters
from geoengine_sys.models.raster_result_descriptor import RasterResultDescriptor
from geoengine_sys.models.time_interval import TimeInterval

class GdalMetaDataStatic(BaseModel):
    """
    GdalMetaDataStatic
    """
    cache_ttl: Optional[conint(strict=True, ge=0)] = Field(None, alias="cacheTtl")
    params: GdalDatasetParameters = Field(...)
    result_descriptor: RasterResultDescriptor = Field(..., alias="resultDescriptor")
    time: Optional[TimeInterval] = None
    __properties = ["cacheTtl", "params", "resultDescriptor", "time"]

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
    def from_json(cls, json_str: str) -> GdalMetaDataStatic:
        """Create an instance of GdalMetaDataStatic from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of params
        if self.params:
            _dict['params'] = self.params.to_dict()
        # override the default output from pydantic by calling `to_dict()` of result_descriptor
        if self.result_descriptor:
            _dict['resultDescriptor'] = self.result_descriptor.to_dict()
        # override the default output from pydantic by calling `to_dict()` of time
        if self.time:
            _dict['time'] = self.time.to_dict()
        # set to None if time (nullable) is None
        # and __fields_set__ contains the field
        if self.time is None and "time" in self.__fields_set__:
            _dict['time'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> GdalMetaDataStatic:
        """Create an instance of GdalMetaDataStatic from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return GdalMetaDataStatic.parse_obj(obj)

        _obj = GdalMetaDataStatic.parse_obj({
            "cache_ttl": obj.get("cacheTtl"),
            "params": GdalDatasetParameters.from_dict(obj.get("params")) if obj.get("params") is not None else None,
            "result_descriptor": RasterResultDescriptor.from_dict(obj.get("resultDescriptor")) if obj.get("resultDescriptor") is not None else None,
            "time": TimeInterval.from_dict(obj.get("time")) if obj.get("time") is not None else None
        })
        return _obj


