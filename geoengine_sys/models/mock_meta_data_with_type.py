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
from geoengine_sys.models.mock_dataset_data_source_loading_info import MockDatasetDataSourceLoadingInfo
from geoengine_sys.models.vector_result_descriptor import VectorResultDescriptor

class MockMetaDataWithType(BaseModel):
    """
    MockMetaDataWithType
    """
    loading_info: MockDatasetDataSourceLoadingInfo = Field(..., alias="loadingInfo")
    result_descriptor: VectorResultDescriptor = Field(..., alias="resultDescriptor")
    type: StrictStr = Field(...)
    __properties = ["loadingInfo", "resultDescriptor", "type"]

    @validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in ('MockMetaData', 'OgrMetaData', 'GdalMetaDataRegular', 'GdalStatic', 'GdalMetadataNetCdfCf', 'GdalMetaDataList'):
            raise ValueError("must be one of enum values ('MockMetaData', 'OgrMetaData', 'GdalMetaDataRegular', 'GdalStatic', 'GdalMetadataNetCdfCf', 'GdalMetaDataList')")
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
    def from_json(cls, json_str: str) -> MockMetaDataWithType:
        """Create an instance of MockMetaDataWithType from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of loading_info
        if self.loading_info:
            _dict['loadingInfo'] = self.loading_info.to_dict()
        # override the default output from pydantic by calling `to_dict()` of result_descriptor
        if self.result_descriptor:
            _dict['resultDescriptor'] = self.result_descriptor.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> MockMetaDataWithType:
        """Create an instance of MockMetaDataWithType from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return MockMetaDataWithType.parse_obj(obj)

        _obj = MockMetaDataWithType.parse_obj({
            "loading_info": MockDatasetDataSourceLoadingInfo.from_dict(obj.get("loadingInfo")) if obj.get("loadingInfo") is not None else None,
            "result_descriptor": VectorResultDescriptor.from_dict(obj.get("resultDescriptor")) if obj.get("resultDescriptor") is not None else None,
            "type": obj.get("type")
        })
        return _obj


