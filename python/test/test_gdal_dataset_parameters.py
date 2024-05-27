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

from geoengine_openapi_client.models.gdal_dataset_parameters import GdalDatasetParameters

class TestGdalDatasetParameters(unittest.TestCase):
    """GdalDatasetParameters unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GdalDatasetParameters:
        """Test GdalDatasetParameters
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GdalDatasetParameters`
        """
        model = GdalDatasetParameters()
        if include_optional:
            return GdalDatasetParameters(
                allow_alphaband_as_mask = True,
                file_not_found_handling = 'NoData',
                file_path = '',
                gdal_config_options = [
                    [
                        ''
                        ]
                    ],
                gdal_open_options = [
                    ''
                    ],
                geo_transform = geoengine_openapi_client.models.gdal_dataset_geo_transform.GdalDatasetGeoTransform(
                    origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                        x = 1.337, 
                        y = 1.337, ), 
                    x_pixel_size = 1.337, 
                    y_pixel_size = 1.337, ),
                height = 0,
                no_data_value = 1.337,
                properties_mapping = [
                    geoengine_openapi_client.models.gdal_metadata_mapping.GdalMetadataMapping(
                        source_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                            domain = '', 
                            key = '', ), 
                        target_key = geoengine_openapi_client.models.raster_properties_key.RasterPropertiesKey(
                            domain = '', 
                            key = '', ), 
                        target_type = 'Number', )
                    ],
                rasterband_channel = 0,
                width = 0
            )
        else:
            return GdalDatasetParameters(
                file_not_found_handling = 'NoData',
                file_path = '',
                geo_transform = geoengine_openapi_client.models.gdal_dataset_geo_transform.GdalDatasetGeoTransform(
                    origin_coordinate = geoengine_openapi_client.models.coordinate2_d.Coordinate2D(
                        x = 1.337, 
                        y = 1.337, ), 
                    x_pixel_size = 1.337, 
                    y_pixel_size = 1.337, ),
                height = 0,
                rasterband_channel = 0,
                width = 0,
        )
        """

    def testGdalDatasetParameters(self):
        """Test GdalDatasetParameters"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
