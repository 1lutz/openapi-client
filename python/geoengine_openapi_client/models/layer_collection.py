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
from typing_extensions import Annotated
from geoengine_openapi_client.models.collection_item import CollectionItem
from geoengine_openapi_client.models.provider_layer_collection_id import ProviderLayerCollectionId
from typing import Optional, Set
from typing_extensions import Self

class LayerCollection(BaseModel):
    """
    LayerCollection
    """ # noqa: E501
    description: StrictStr
    entry_label: Optional[StrictStr] = Field(default=None, description="a common label for the collection's entries, if there is any", alias="entryLabel")
    id: ProviderLayerCollectionId
    items: List[CollectionItem]
    name: StrictStr
    properties: List[Annotated[List[StrictStr], Field(min_length=2, max_length=2)]]
    __properties: ClassVar[List[str]] = ["description", "entryLabel", "id", "items", "name", "properties"]

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
        """Create an instance of LayerCollection from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of id
        if self.id:
            _dict['id'] = self.id.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in items (list)
        _items = []
        if self.items:
            for _item in self.items:
                if _item:
                    _items.append(_item.to_dict())
            _dict['items'] = _items
        # set to None if entry_label (nullable) is None
        # and model_fields_set contains the field
        if self.entry_label is None and "entry_label" in self.model_fields_set:
            _dict['entryLabel'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of LayerCollection from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "description": obj.get("description"),
            "entryLabel": obj.get("entryLabel"),
            "id": ProviderLayerCollectionId.from_dict(obj["id"]) if obj.get("id") is not None else None,
            "items": [CollectionItem.from_dict(_item) for _item in obj["items"]] if obj.get("items") is not None else None,
            "name": obj.get("name"),
            "properties": obj.get("properties")
        })
        return _obj


