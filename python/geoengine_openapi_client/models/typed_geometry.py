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
import json
import pprint
from pydantic import BaseModel, ConfigDict, Field, StrictStr, ValidationError, field_validator
from typing import Any, List, Optional
from geoengine_openapi_client.models.typed_geometry_one_of import TypedGeometryOneOf
from geoengine_openapi_client.models.typed_geometry_one_of1 import TypedGeometryOneOf1
from geoengine_openapi_client.models.typed_geometry_one_of2 import TypedGeometryOneOf2
from geoengine_openapi_client.models.typed_geometry_one_of3 import TypedGeometryOneOf3
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

TYPEDGEOMETRY_ONE_OF_SCHEMAS = ["TypedGeometryOneOf", "TypedGeometryOneOf1", "TypedGeometryOneOf2", "TypedGeometryOneOf3"]

class TypedGeometry(BaseModel):
    """
    TypedGeometry
    """
    # data type: TypedGeometryOneOf
    oneof_schema_1_validator: Optional[TypedGeometryOneOf] = None
    # data type: TypedGeometryOneOf1
    oneof_schema_2_validator: Optional[TypedGeometryOneOf1] = None
    # data type: TypedGeometryOneOf2
    oneof_schema_3_validator: Optional[TypedGeometryOneOf2] = None
    # data type: TypedGeometryOneOf3
    oneof_schema_4_validator: Optional[TypedGeometryOneOf3] = None
    actual_instance: Optional[Union[TypedGeometryOneOf, TypedGeometryOneOf1, TypedGeometryOneOf2, TypedGeometryOneOf3]] = None
    one_of_schemas: Set[str] = { "TypedGeometryOneOf", "TypedGeometryOneOf1", "TypedGeometryOneOf2", "TypedGeometryOneOf3" }

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )


    def __init__(self, *args, **kwargs) -> None:
        if args:
            if len(args) > 1:
                raise ValueError("If a position argument is used, only 1 is allowed to set `actual_instance`")
            if kwargs:
                raise ValueError("If a position argument is used, keyword arguments cannot be used.")
            super().__init__(actual_instance=args[0])
        else:
            super().__init__(**kwargs)

    @field_validator('actual_instance')
    def actual_instance_must_validate_oneof(cls, v):
        instance = TypedGeometry.model_construct()
        error_messages = []
        match = 0
        # validate data type: TypedGeometryOneOf
        if not isinstance(v, TypedGeometryOneOf):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TypedGeometryOneOf`")
        else:
            match += 1
        # validate data type: TypedGeometryOneOf1
        if not isinstance(v, TypedGeometryOneOf1):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TypedGeometryOneOf1`")
        else:
            match += 1
        # validate data type: TypedGeometryOneOf2
        if not isinstance(v, TypedGeometryOneOf2):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TypedGeometryOneOf2`")
        else:
            match += 1
        # validate data type: TypedGeometryOneOf3
        if not isinstance(v, TypedGeometryOneOf3):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TypedGeometryOneOf3`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in TypedGeometry with oneOf schemas: TypedGeometryOneOf, TypedGeometryOneOf1, TypedGeometryOneOf2, TypedGeometryOneOf3. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in TypedGeometry with oneOf schemas: TypedGeometryOneOf, TypedGeometryOneOf1, TypedGeometryOneOf2, TypedGeometryOneOf3. Details: " + ", ".join(error_messages))
        else:
            return v

    @classmethod
    def from_dict(cls, obj: Union[str, Dict[str, Any]]) -> Self:
        return cls.from_json(json.dumps(obj))

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Returns the object represented by the json string"""
        instance = cls.model_construct()
        error_messages = []
        match = 0

        # deserialize data into TypedGeometryOneOf
        try:
            instance.actual_instance = TypedGeometryOneOf.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TypedGeometryOneOf1
        try:
            instance.actual_instance = TypedGeometryOneOf1.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TypedGeometryOneOf2
        try:
            instance.actual_instance = TypedGeometryOneOf2.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TypedGeometryOneOf3
        try:
            instance.actual_instance = TypedGeometryOneOf3.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into TypedGeometry with oneOf schemas: TypedGeometryOneOf, TypedGeometryOneOf1, TypedGeometryOneOf2, TypedGeometryOneOf3. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into TypedGeometry with oneOf schemas: TypedGeometryOneOf, TypedGeometryOneOf1, TypedGeometryOneOf2, TypedGeometryOneOf3. Details: " + ", ".join(error_messages))
        else:
            return instance

    def to_json(self) -> str:
        """Returns the JSON representation of the actual instance"""
        if self.actual_instance is None:
            return "null"

        if hasattr(self.actual_instance, "to_json") and callable(self.actual_instance.to_json):
            return self.actual_instance.to_json()
        else:
            return json.dumps(self.actual_instance)

    def to_dict(self) -> Optional[Union[Dict[str, Any], TypedGeometryOneOf, TypedGeometryOneOf1, TypedGeometryOneOf2, TypedGeometryOneOf3]]:
        """Returns the dict representation of the actual instance"""
        if self.actual_instance is None:
            return None

        if hasattr(self.actual_instance, "to_dict") and callable(self.actual_instance.to_dict):
            return self.actual_instance.to_dict()
        else:
            # primitive type
            return self.actual_instance

    def to_str(self) -> str:
        """Returns the string representation of the actual instance"""
        return pprint.pformat(self.model_dump())


