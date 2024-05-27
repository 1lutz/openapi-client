# coding: utf-8

"""
    Geo Engine Pro API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from geoengine_openapi_client.models.date_time_parse_format import DateTimeParseFormat

class TestDateTimeParseFormat(unittest.TestCase):
    """DateTimeParseFormat unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> DateTimeParseFormat:
        """Test DateTimeParseFormat
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `DateTimeParseFormat`
        """
        model = DateTimeParseFormat()
        if include_optional:
            return DateTimeParseFormat(
                fmt = '',
                has_time = True,
                has_tz = True
            )
        else:
            return DateTimeParseFormat(
                fmt = '',
                has_time = True,
                has_tz = True,
        )
        """

    def testDateTimeParseFormat(self):
        """Test DateTimeParseFormat"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
