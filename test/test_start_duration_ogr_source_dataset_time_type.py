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

from geoengine_sys.models.start_duration_ogr_source_dataset_time_type import StartDurationOgrSourceDatasetTimeType  # noqa: E501

class TestStartDurationOgrSourceDatasetTimeType(unittest.TestCase):
    """StartDurationOgrSourceDatasetTimeType unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> StartDurationOgrSourceDatasetTimeType:
        """Test StartDurationOgrSourceDatasetTimeType
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `StartDurationOgrSourceDatasetTimeType`
        """
        model = StartDurationOgrSourceDatasetTimeType()  # noqa: E501
        if include_optional:
            return StartDurationOgrSourceDatasetTimeType(
                duration_field = '',
                start_field = '',
                start_format = None,
                type = 'startDuration'
            )
        else:
            return StartDurationOgrSourceDatasetTimeType(
                duration_field = '',
                start_field = '',
                start_format = None,
                type = 'startDuration',
        )
        """

    def testStartDurationOgrSourceDatasetTimeType(self):
        """Test StartDurationOgrSourceDatasetTimeType"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
