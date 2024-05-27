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
from geoengine_openapi_client.models.ogr_source_time_format_auto import OgrSourceTimeFormatAuto
from geoengine_openapi_client.models.ogr_source_time_format_custom import OgrSourceTimeFormatCustom
from geoengine_openapi_client.models.ogr_source_time_format_unix_time_stamp import OgrSourceTimeFormatUnixTimeStamp
from pydantic import StrictStr, Field
from typing import Union, List, Set, Optional, Dict
from typing_extensions import Literal, Self

OGRSOURCETIMEFORMAT_ONE_OF_SCHEMAS = ["OgrSourceTimeFormatAuto", "OgrSourceTimeFormatCustom", "OgrSourceTimeFormatUnixTimeStamp"]

class OgrSourceTimeFormat(BaseModel):
    """
    OgrSourceTimeFormat
    """
    # data type: OgrSourceTimeFormatCustom
    oneof_schema_1_validator: Optional[OgrSourceTimeFormatCustom] = None
    # data type: OgrSourceTimeFormatUnixTimeStamp
    oneof_schema_2_validator: Optional[OgrSourceTimeFormatUnixTimeStamp] = None
    # data type: OgrSourceTimeFormatAuto
    oneof_schema_3_validator: Optional[OgrSourceTimeFormatAuto] = None
    actual_instance: Optional[Union[OgrSourceTimeFormatAuto, OgrSourceTimeFormatCustom, OgrSourceTimeFormatUnixTimeStamp]] = None
    one_of_schemas: Set[str] = { "OgrSourceTimeFormatAuto", "OgrSourceTimeFormatCustom", "OgrSourceTimeFormatUnixTimeStamp" }

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
        instance = OgrSourceTimeFormat.model_construct()
        error_messages = []
        match = 0
        # validate data type: OgrSourceTimeFormatCustom
        if not isinstance(v, OgrSourceTimeFormatCustom):
            error_messages.append(f"Error! Input type `{type(v)}` is not `OgrSourceTimeFormatCustom`")
        else:
            match += 1
        # validate data type: OgrSourceTimeFormatUnixTimeStamp
        if not isinstance(v, OgrSourceTimeFormatUnixTimeStamp):
            error_messages.append(f"Error! Input type `{type(v)}` is not `OgrSourceTimeFormatUnixTimeStamp`")
        else:
            match += 1
        # validate data type: OgrSourceTimeFormatAuto
        if not isinstance(v, OgrSourceTimeFormatAuto):
            error_messages.append(f"Error! Input type `{type(v)}` is not `OgrSourceTimeFormatAuto`")
        else:
            match += 1
        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when setting `actual_instance` in OgrSourceTimeFormat with oneOf schemas: OgrSourceTimeFormatAuto, OgrSourceTimeFormatCustom, OgrSourceTimeFormatUnixTimeStamp. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when setting `actual_instance` in OgrSourceTimeFormat with oneOf schemas: OgrSourceTimeFormatAuto, OgrSourceTimeFormatCustom, OgrSourceTimeFormatUnixTimeStamp. Details: " + ", ".join(error_messages))
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
        _data_type = json.loads(json_str).get("format")
        if not _data_type:
            raise ValueError("Failed to lookup data type from the field `format` in the input.")

        # check if data type is `OgrSourceTimeFormatAuto`
        if _data_type == "auto":
            instance.actual_instance = OgrSourceTimeFormatAuto.from_json(json_str)
            return instance

        # check if data type is `OgrSourceTimeFormatCustom`
        if _data_type == "custom":
            instance.actual_instance = OgrSourceTimeFormatCustom.from_json(json_str)
            return instance

        # check if data type is `OgrSourceTimeFormatUnixTimeStamp`
        if _data_type == "unixTimeStamp":
            instance.actual_instance = OgrSourceTimeFormatUnixTimeStamp.from_json(json_str)
            return instance

        # check if data type is `OgrSourceTimeFormatAuto`
        if _data_type == "OgrSourceTimeFormatAuto":
            instance.actual_instance = OgrSourceTimeFormatAuto.from_json(json_str)
            return instance

        # check if data type is `OgrSourceTimeFormatCustom`
        if _data_type == "OgrSourceTimeFormatCustom":
            instance.actual_instance = OgrSourceTimeFormatCustom.from_json(json_str)
            return instance

        # check if data type is `OgrSourceTimeFormatUnixTimeStamp`
        if _data_type == "OgrSourceTimeFormatUnixTimeStamp":
            instance.actual_instance = OgrSourceTimeFormatUnixTimeStamp.from_json(json_str)
            return instance

        # deserialize data into OgrSourceTimeFormatCustom
        try:
            instance.actual_instance = OgrSourceTimeFormatCustom.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into OgrSourceTimeFormatUnixTimeStamp
        try:
            instance.actual_instance = OgrSourceTimeFormatUnixTimeStamp.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))
        # deserialize data into OgrSourceTimeFormatAuto
        try:
            instance.actual_instance = OgrSourceTimeFormatAuto.from_json(json_str)
            match += 1
        except (ValidationError, ValueError) as e:
            error_messages.append(str(e))

        if match > 1:
            # more than 1 match
            raise ValueError("Multiple matches found when deserializing the JSON string into OgrSourceTimeFormat with oneOf schemas: OgrSourceTimeFormatAuto, OgrSourceTimeFormatCustom, OgrSourceTimeFormatUnixTimeStamp. Details: " + ", ".join(error_messages))
        elif match == 0:
            # no match
            raise ValueError("No match found when deserializing the JSON string into OgrSourceTimeFormat with oneOf schemas: OgrSourceTimeFormatAuto, OgrSourceTimeFormatCustom, OgrSourceTimeFormatUnixTimeStamp. Details: " + ", ".join(error_messages))
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

    def to_dict(self) -> Optional[Union[Dict[str, Any], OgrSourceTimeFormatAuto, OgrSourceTimeFormatCustom, OgrSourceTimeFormatUnixTimeStamp]]:
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


