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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class AutoCreateDataset(BaseModel):
    """
    AutoCreateDataset
    """ # noqa: E501
    dataset_description: StrictStr = Field(alias="datasetDescription")
    dataset_name: StrictStr = Field(alias="datasetName")
    layer_name: Optional[StrictStr] = Field(default=None, alias="layerName")
    main_file: StrictStr = Field(alias="mainFile")
    tags: Optional[List[StrictStr]] = None
    upload: StrictStr
    __properties: ClassVar[List[str]] = ["datasetDescription", "datasetName", "layerName", "mainFile", "tags", "upload"]

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
        """Create an instance of AutoCreateDataset from a JSON string"""
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
        # set to None if layer_name (nullable) is None
        # and model_fields_set contains the field
        if self.layer_name is None and "layer_name" in self.model_fields_set:
            _dict['layerName'] = None

        # set to None if tags (nullable) is None
        # and model_fields_set contains the field
        if self.tags is None and "tags" in self.model_fields_set:
            _dict['tags'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of AutoCreateDataset from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "datasetDescription": obj.get("datasetDescription"),
            "datasetName": obj.get("datasetName"),
            "layerName": obj.get("layerName"),
            "mainFile": obj.get("mainFile"),
            "tags": obj.get("tags"),
            "upload": obj.get("upload")
        })
        return _obj


