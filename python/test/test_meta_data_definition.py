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

from geoengine_openapi_client.models.meta_data_definition import MetaDataDefinition

class TestMetaDataDefinition(unittest.TestCase):
    """MetaDataDefinition unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> MetaDataDefinition:
        """Test MetaDataDefinition
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `MetaDataDefinition`
        """
        model = MetaDataDefinition()
        if include_optional:
            return MetaDataDefinition(
                loading_info = geoengine_openapi_client.models.ogr_source_dataset.OgrSourceDataset(
                    attribute_query = '', 
                    cache_ttl = 0, 
                    columns = null, 
                    data_type = null, 
                    default_geometry = null, 
                    file_name = '', 
                    force_ogr_spatial_filter = True, 
                    force_ogr_time_filter = True, 
                    layer_name = '', 
                    on_error = 'ignore', 
                    sql_query = '', 
                    time = null, ),
                result_descriptor = geoengine_openapi_client.models.raster_result_descriptor.RasterResultDescriptor(
                    bands = [
                        geoengine_openapi_client.models.raster_band_descriptor.RasterBandDescriptor(
                            measurement = null, 
                            name = '', )
                        ], 
                    bbox = null, 
                    data_type = 'U8', 
                    resolution = null, 
                    spatial_reference = '', 
                    time = null, ),
                type = 'MockMetaData',
                cache_ttl = 0,
                data_time = geoengine_openapi_client.models.time_interval.TimeInterval(
                    end = 56, 
                    start = 56, ),
                params = [
                    geoengine_openapi_client.models.gdal_loading_info_temporal_slice.GdalLoadingInfoTemporalSlice(
                        cache_ttl = 0, 
                        time = geoengine_openapi_client.models.time_interval.TimeInterval(
                            end = 56, 
                            start = 56, ), )
                    ],
                step = geoengine_openapi_client.models.time_step.TimeStep(
                    granularity = 'millis', 
                    step = 0, ),
                time_placeholders = {
                    'key' : geoengine_openapi_client.models.gdal_source_time_placeholder.GdalSourceTimePlaceholder(
                        format = geoengine_openapi_client.models.date_time_parse_format.DateTimeParseFormat(
                            fmt = '', 
                            has_time = True, 
                            has_tz = True, ), 
                        reference = 'start', )
                    },
                time = geoengine_openapi_client.models.time_interval.TimeInterval(
                    end = 56, 
                    start = 56, ),
                band_offset = 0,
                end = 56,
                start = 56
            )
        else:
            return MetaDataDefinition(
                loading_info = geoengine_openapi_client.models.ogr_source_dataset.OgrSourceDataset(
                    attribute_query = '', 
                    cache_ttl = 0, 
                    columns = null, 
                    data_type = null, 
                    default_geometry = null, 
                    file_name = '', 
                    force_ogr_spatial_filter = True, 
                    force_ogr_time_filter = True, 
                    layer_name = '', 
                    on_error = 'ignore', 
                    sql_query = '', 
                    time = null, ),
                result_descriptor = geoengine_openapi_client.models.raster_result_descriptor.RasterResultDescriptor(
                    bands = [
                        geoengine_openapi_client.models.raster_band_descriptor.RasterBandDescriptor(
                            measurement = null, 
                            name = '', )
                        ], 
                    bbox = null, 
                    data_type = 'U8', 
                    resolution = null, 
                    spatial_reference = '', 
                    time = null, ),
                type = 'MockMetaData',
                data_time = geoengine_openapi_client.models.time_interval.TimeInterval(
                    end = 56, 
                    start = 56, ),
                params = [
                    geoengine_openapi_client.models.gdal_loading_info_temporal_slice.GdalLoadingInfoTemporalSlice(
                        cache_ttl = 0, 
                        time = geoengine_openapi_client.models.time_interval.TimeInterval(
                            end = 56, 
                            start = 56, ), )
                    ],
                step = geoengine_openapi_client.models.time_step.TimeStep(
                    granularity = 'millis', 
                    step = 0, ),
                time_placeholders = {
                    'key' : geoengine_openapi_client.models.gdal_source_time_placeholder.GdalSourceTimePlaceholder(
                        format = geoengine_openapi_client.models.date_time_parse_format.DateTimeParseFormat(
                            fmt = '', 
                            has_time = True, 
                            has_tz = True, ), 
                        reference = 'start', )
                    },
                band_offset = 0,
                end = 56,
                start = 56,
        )
        """

    def testMetaDataDefinition(self):
        """Test MetaDataDefinition"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
