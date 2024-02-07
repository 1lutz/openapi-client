# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import json
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class Permission(str, Enum):
    """
    Permission
    """

    """
    allowed enum values
    """
    READ = 'Read'
    OWNER = 'Owner'

    @classmethod
    def from_json(cls, json_str: str) -> Permission:
        """Create an instance of Permission from a JSON string"""
        return Permission(json.loads(json_str))


