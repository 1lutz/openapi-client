# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.7.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import json
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class FileNotFoundHandling(str, Enum):
    """
    FileNotFoundHandling
    """

    """
    allowed enum values
    """
    NODATA = 'NoData'
    ERROR = 'Error'

    @classmethod
    def from_json(cls, json_str: str) -> FileNotFoundHandling:
        """Create an instance of FileNotFoundHandling from a JSON string"""
        return FileNotFoundHandling(json.loads(json_str))


