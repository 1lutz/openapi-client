# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List
from geoengine_openapi_client.models.mock_dataset_data_source_loading_info import MockDatasetDataSourceLoadingInfo
from geoengine_openapi_client.models.vector_result_descriptor import VectorResultDescriptor
from typing import Optional, Set
from typing_extensions import Self

class MockMetaData(BaseModel):
    """
    MockMetaData
    """ # noqa: E501
    loading_info: MockDatasetDataSourceLoadingInfo = Field(alias="loadingInfo")
    result_descriptor: VectorResultDescriptor = Field(alias="resultDescriptor")
    __properties: ClassVar[List[str]] = ["loadingInfo", "resultDescriptor"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of MockMetaData from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of loading_info
        if self.loading_info:
            _dict['loadingInfo'] = self.loading_info.to_dict()
        # override the default output from pydantic by calling `to_dict()` of result_descriptor
        if self.result_descriptor:
            _dict['resultDescriptor'] = self.result_descriptor.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of MockMetaData from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "loadingInfo": MockDatasetDataSourceLoadingInfo.from_dict(obj["loadingInfo"]) if obj.get("loadingInfo") is not None else None,
            "resultDescriptor": VectorResultDescriptor.from_dict(obj["resultDescriptor"]) if obj.get("resultDescriptor") is not None else None
        })
        return _obj


