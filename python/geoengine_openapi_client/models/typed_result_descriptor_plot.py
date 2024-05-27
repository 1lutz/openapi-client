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

from pydantic import BaseModel, ConfigDict, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from geoengine_openapi_client.models.bounding_box2_d import BoundingBox2D
from geoengine_openapi_client.models.time_interval import TimeInterval
from typing import Optional, Set
from typing_extensions import Self

class TypedResultDescriptorPlot(BaseModel):
    """
    A `ResultDescriptor` for plot queries
    """ # noqa: E501
    bbox: Optional[BoundingBox2D] = None
    spatial_reference: StrictStr = Field(alias="spatialReference")
    time: Optional[TimeInterval] = None
    type: StrictStr
    __properties: ClassVar[List[str]] = ["bbox", "spatialReference", "time", "type"]

    @field_validator('type')
    def type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['plot']):
            raise ValueError("must be one of enum values ('plot')")
        return value

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
        """Create an instance of TypedResultDescriptorPlot from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of bbox
        if self.bbox:
            _dict['bbox'] = self.bbox.to_dict()
        # override the default output from pydantic by calling `to_dict()` of time
        if self.time:
            _dict['time'] = self.time.to_dict()
        # set to None if bbox (nullable) is None
        # and model_fields_set contains the field
        if self.bbox is None and "bbox" in self.model_fields_set:
            _dict['bbox'] = None

        # set to None if time (nullable) is None
        # and model_fields_set contains the field
        if self.time is None and "time" in self.model_fields_set:
            _dict['time'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of TypedResultDescriptorPlot from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "bbox": BoundingBox2D.from_dict(obj["bbox"]) if obj.get("bbox") is not None else None,
            "spatialReference": obj.get("spatialReference"),
            "time": TimeInterval.from_dict(obj["time"]) if obj.get("time") is not None else None,
            "type": obj.get("type")
        })
        return _obj


