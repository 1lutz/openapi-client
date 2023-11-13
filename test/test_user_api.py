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

from geoengine_sys.api.user_api import UserApi  # noqa: E501


class TestUserApi(unittest.TestCase):
    """UserApi unit test stubs"""

    def setUp(self) -> None:
        self.api = UserApi()  # noqa: E501

    def tearDown(self) -> None:
        pass

    def test_add_role_handler(self) -> None:
        """Test case for add_role_handler

        Add a new role. Requires admin privilige.  # noqa: E501
        """
        pass

    def test_assign_role_handler(self) -> None:
        """Test case for assign_role_handler

        Assign a role to a user. Requires admin privilige.  # noqa: E501
        """
        pass

    def test_get_role_descriptions(self) -> None:
        """Test case for get_role_descriptions

        Query roles for the current user.  # noqa: E501
        """
        pass

    def test_get_user_quota_handler(self) -> None:
        """Test case for get_user_quota_handler

        Retrieves the available and used quota of a specific user.  # noqa: E501
        """
        pass

    def test_quota_handler(self) -> None:
        """Test case for quota_handler

        Retrieves the available and used quota of the current user.  # noqa: E501
        """
        pass

    def test_remove_role_handler(self) -> None:
        """Test case for remove_role_handler

        Remove a role. Requires admin privilige.  # noqa: E501
        """
        pass

    def test_revoke_role_handler(self) -> None:
        """Test case for revoke_role_handler

        Revoke a role from a user. Requires admin privilige.  # noqa: E501
        """
        pass

    def test_update_user_quota_handler(self) -> None:
        """Test case for update_user_quota_handler

        Update the available quota of a specific user.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
