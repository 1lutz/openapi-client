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
from geoengine_openapi_client.models.typed_result_descriptor_plot import TypedResultDescriptorPlot
from geoengine_openapi_client.models.typed_result_descriptor_raster import TypedResultDescriptorRaster
from geoengine_openapi_client.models.typed_result_descriptor_vector import TypedResultDescriptorVector
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

TYPEDRESULTDESCRIPTOR_ONE_OF_SCHEMAS = ["TypedResultDescriptorPlot", "TypedResultDescriptorRaster", "TypedResultDescriptorVector"]

class TypedResultDescriptor(BaseModel):
    """
    TypedResultDescriptor
    """
    # data type: TypedResultDescriptorPlot
    oneof_schema_1_validator: Optional[TypedResultDescriptorPlot] = None
    # data type: TypedResultDescriptorRaster
    oneof_schema_2_validator: Optional[TypedResultDescriptorRaster] = None
    # data type: TypedResultDescriptorVector
    oneof_schema_3_validator: Optional[TypedResultDescriptorVector] = None
    actual_instance: Optional[Union[TypedResultDescriptorPlot, TypedResultDescriptorRaster, TypedResultDescriptorVector]] = None
    one_of_schemas: Set[str] = { "TypedResultDescriptorPlot", "TypedResultDescriptorRaster", "TypedResultDescriptorVector" }

    model_config = ConfigDict(
        validate_assignment=True,
        protected_namespaces=(),
    )


    discriminator_value_class_map: Dict[str, str] = {
    }

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
        instance = TypedResultDescriptor.model_construct()
        error_messages = []
        match = 0
        # validate data type: TypedResultDescriptorPlot
        if not isinstance(v, TypedResultDescriptorPlot):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TypedResultDescriptorPlot`")
        else:
            match += 1
        # validate data type: TypedResultDescriptorRaster
        if not isinstance(v, TypedResultDescriptorRaster):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TypedResultDescriptorRaster`")
        else:
            match += 1
        # validate data type: TypedResultDescriptorVector
        if not isinstance(v, TypedResultDescriptorVector):
            error_messages.append(f"Error! Input type `{type(v)}` is not `TypedResultDescriptorVector`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in TypedResultDescriptor with oneOf schemas: TypedResultDescriptorPlot, TypedResultDescriptorRaster, TypedResultDescriptorVector. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in TypedResultDescriptor with oneOf schemas: TypedResultDescriptorPlot, TypedResultDescriptorRaster, TypedResultDescriptorVector. Details: " + ", ".join(error_messages))
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

        # use oneOf discriminator to lookup the data type
        _data_type = json.loads(json_str).get("type")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `type` in the input.")

        # check if data type is `TypedResultDescriptorPlot`
        if _data_type == "plot":
            instance.actual_instance = TypedResultDescriptorPlot.from_json(json_str)
            return instance

        # check if data type is `TypedResultDescriptorRaster`
        if _data_type == "raster":
            instance.actual_instance = TypedResultDescriptorRaster.from_json(json_str)
            return instance

        # check if data type is `TypedResultDescriptorVector`
        if _data_type == "vector":
            instance.actual_instance = TypedResultDescriptorVector.from_json(json_str)
            return instance

        # check if data type is `TypedResultDescriptorPlot`
        if _data_type == "TypedResultDescriptorPlot":
            instance.actual_instance = TypedResultDescriptorPlot.from_json(json_str)
            return instance

        # check if data type is `TypedResultDescriptorRaster`
        if _data_type == "TypedResultDescriptorRaster":
            instance.actual_instance = TypedResultDescriptorRaster.from_json(json_str)
            return instance

        # check if data type is `TypedResultDescriptorVector`
        if _data_type == "TypedResultDescriptorVector":
            instance.actual_instance = TypedResultDescriptorVector.from_json(json_str)
            return instance

        # deserialize data into TypedResultDescriptorPlot
        try:
            instance.actual_instance = TypedResultDescriptorPlot.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TypedResultDescriptorRaster
        try:
            instance.actual_instance = TypedResultDescriptorRaster.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into TypedResultDescriptorVector
        try:
            instance.actual_instance = TypedResultDescriptorVector.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into TypedResultDescriptor with oneOf schemas: TypedResultDescriptorPlot, TypedResultDescriptorRaster, TypedResultDescriptorVector. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into TypedResultDescriptor with oneOf schemas: TypedResultDescriptorPlot, TypedResultDescriptorRaster, TypedResultDescriptorVector. Details: " + ", ".join(error_messages))
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

    def to_dict(self) -> Optional[Union[Dict[str, Any], TypedResultDescriptorPlot, TypedResultDescriptorRaster, TypedResultDescriptorVector]]:
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


