# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.7.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from geoengine_sys.models.ogr_source_time_format import OgrSourceTimeFormat  # noqa: E501

class TestOgrSourceTimeFormat(unittest.TestCase):
    """OgrSourceTimeFormat unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> OgrSourceTimeFormat:
        """Test OgrSourceTimeFormat
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `OgrSourceTimeFormat`
        """
        model = OgrSourceTimeFormat()  # noqa: E501
        if include_optional:
            return OgrSourceTimeFormat(
                custom_format = geoengine_sys.models.date_time_parse_format.DateTimeParseFormat(
                    fmt = '', 
                    has_time = True, 
                    has_tz = True, ),
                format = 'auto',
                timestamp_type = 'epochSeconds'
            )
        else:
            return OgrSourceTimeFormat(
                custom_format = geoengine_sys.models.date_time_parse_format.DateTimeParseFormat(
                    fmt = '', 
                    has_time = True, 
                    has_tz = True, ),
                format = 'auto',
                timestamp_type = 'epochSeconds',
        )
        """

    def testOgrSourceTimeFormat(self):
        """Test OgrSourceTimeFormat"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
