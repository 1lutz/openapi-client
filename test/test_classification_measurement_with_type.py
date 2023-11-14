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

from geoengine_openapi_client.models.classification_measurement_with_type import ClassificationMeasurementWithType  # noqa: E501

class TestClassificationMeasurementWithType(unittest.TestCase):
    """ClassificationMeasurementWithType unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ClassificationMeasurementWithType:
        """Test ClassificationMeasurementWithType
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ClassificationMeasurementWithType`
        """
        model = ClassificationMeasurementWithType()  # noqa: E501
        if include_optional:
            return ClassificationMeasurementWithType(
                classes = {
                    'key' : ''
                    },
                measurement = '',
                type = 'classification'
            )
        else:
            return ClassificationMeasurementWithType(
                classes = {
                    'key' : ''
                    },
                measurement = '',
                type = 'classification',
        )
        """

    def testClassificationMeasurementWithType(self):
        """Test ClassificationMeasurementWithType"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()