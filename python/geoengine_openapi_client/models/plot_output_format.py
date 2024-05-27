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
from enum import Enum
from typing_extensions import Self


class PlotOutputFormat(str, Enum):
    """
    PlotOutputFormat
    """

    """
    allowed enum values
    """
    JSONPLAIN = 'JsonPlain'
    JSONVEGA = 'JsonVega'
    IMAGEPNG = 'ImagePng'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of PlotOutputFormat from a JSON string"""
        return cls(json.loads(json_str))


