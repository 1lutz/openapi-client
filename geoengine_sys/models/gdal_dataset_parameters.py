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


from typing import List, Optional, Union
from pydantic import BaseModel, Field, StrictBool, StrictFloat, StrictInt, StrictStr, conint, conlist
from geoengine_sys.models.file_not_found_handling import FileNotFoundHandling
from geoengine_sys.models.gdal_dataset_geo_transform import GdalDatasetGeoTransform
from geoengine_sys.models.gdal_metadata_mapping import GdalMetadataMapping

class GdalDatasetParameters(BaseModel):
    """
    Parameters for loading data using Gdal  # noqa: E501
    """
    allow_alphaband_as_mask: Optional[StrictBool] = Field(None, alias="allowAlphabandAsMask")
    file_not_found_handling: FileNotFoundHandling = Field(..., alias="fileNotFoundHandling")
    file_path: StrictStr = Field(..., alias="filePath")
    gdal_config_options: Optional[conlist(conlist(StrictStr, max_items=2, min_items=2))] = Field(None, alias="gdalConfigOptions")
    gdal_open_options: Optional[conlist(StrictStr)] = Field(None, alias="gdalOpenOptions")
    geo_transform: GdalDatasetGeoTransform = Field(..., alias="geoTransform")
    height: conint(strict=True, ge=0) = Field(...)
    no_data_value: Optional[Union[StrictFloat, StrictInt]] = Field(None, alias="noDataValue")
    properties_mapping: Optional[conlist(GdalMetadataMapping)] = Field(None, alias="propertiesMapping")
    rasterband_channel: conint(strict=True, ge=0) = Field(..., alias="rasterbandChannel")
    width: conint(strict=True, ge=0) = Field(...)
    __properties = ["allowAlphabandAsMask", "fileNotFoundHandling", "filePath", "gdalConfigOptions", "gdalOpenOptions", "geoTransform", "height", "noDataValue", "propertiesMapping", "rasterbandChannel", "width"]

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
    def from_json(cls, json_str: str) -> GdalDatasetParameters:
        """Create an instance of GdalDatasetParameters from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of geo_transform
        if self.geo_transform:
            _dict['geoTransform'] = self.geo_transform.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in properties_mapping (list)
        _items = []
        if self.properties_mapping:
            for _item in self.properties_mapping:
                if _item:
                    _items.append(_item.to_dict())
            _dict['propertiesMapping'] = _items
        # set to None if gdal_config_options (nullable) is None
        # and __fields_set__ contains the field
        if self.gdal_config_options is None and "gdal_config_options" in self.__fields_set__:
            _dict['gdalConfigOptions'] = None

        # set to None if gdal_open_options (nullable) is None
        # and __fields_set__ contains the field
        if self.gdal_open_options is None and "gdal_open_options" in self.__fields_set__:
            _dict['gdalOpenOptions'] = None

        # set to None if no_data_value (nullable) is None
        # and __fields_set__ contains the field
        if self.no_data_value is None and "no_data_value" in self.__fields_set__:
            _dict['noDataValue'] = None

        # set to None if properties_mapping (nullable) is None
        # and __fields_set__ contains the field
        if self.properties_mapping is None and "properties_mapping" in self.__fields_set__:
            _dict['propertiesMapping'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> GdalDatasetParameters:
        """Create an instance of GdalDatasetParameters from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return GdalDatasetParameters.parse_obj(obj)

        _obj = GdalDatasetParameters.parse_obj({
            "allow_alphaband_as_mask": obj.get("allowAlphabandAsMask"),
            "file_not_found_handling": obj.get("fileNotFoundHandling"),
            "file_path": obj.get("filePath"),
            "gdal_config_options": obj.get("gdalConfigOptions"),
            "gdal_open_options": obj.get("gdalOpenOptions"),
            "geo_transform": GdalDatasetGeoTransform.from_dict(obj.get("geoTransform")) if obj.get("geoTransform") is not None else None,
            "height": obj.get("height"),
            "no_data_value": obj.get("noDataValue"),
            "properties_mapping": [GdalMetadataMapping.from_dict(_item) for _item in obj.get("propertiesMapping")] if obj.get("propertiesMapping") is not None else None,
            "rasterband_channel": obj.get("rasterbandChannel"),
            "width": obj.get("width")
        })
        return _obj


