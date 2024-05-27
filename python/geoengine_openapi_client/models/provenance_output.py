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

from pydantic import BaseModel, ConfigDict
from typing import Any, ClassVar, Dict, List, Optional
from geoengine_openapi_client.models.data_id import DataId
from geoengine_openapi_client.models.provenance import Provenance
from typing import Optional, Set
from typing_extensions import Self

class ProvenanceOutput(BaseModel):
    """
    ProvenanceOutput
    """ # noqa: E501
    data: DataId
    provenance: Optional[List[Provenance]] = None
    __properties: ClassVar[List[str]] = ["data", "provenance"]

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
        """Create an instance of ProvenanceOutput from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of data
        if self.data:
            _dict['data'] = self.data.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in provenance (list)
        _items = []
        if self.provenance:
            for _item in self.provenance:
                if _item:
                    _items.append(_item.to_dict())
            _dict['provenance'] = _items
        # set to None if provenance (nullable) is None
        # and model_fields_set contains the field
        if self.provenance is None and "provenance" in self.model_fields_set:
            _dict['provenance'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ProvenanceOutput from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "data": DataId.from_dict(obj["data"]) if obj.get("data") is not None else None,
            "provenance": [Provenance.from_dict(_item) for _item in obj["provenance"]] if obj.get("provenance") is not None else None
        })
        return _obj


