# Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2025)
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""link_button unit tests."""

from parameterized import parameterized

import streamlit as st
from streamlit.errors import StreamlitAPIException
from tests.delta_generator_test_case import DeltaGeneratorTestCase


class LinkButtonTest(DeltaGeneratorTestCase):
    """Test ability to marshall link_button protos."""

    def test_just_label(self):
        """Test that it can be called with label and string or bytes data."""
        st.link_button("the label", url="https://streamlit.io")

        c = self.get_delta_from_queue().new_element.link_button
        self.assertEqual(c.label, "the label")
        self.assertEqual(c.type, "secondary")
        self.assertEqual(c.disabled, False)

    def test_just_disabled(self):
        """Test that it can be called with disabled param."""
        st.link_button("the label", url="https://streamlit.io", disabled=True)

        c = self.get_delta_from_queue().new_element.link_button
        self.assertEqual(c.disabled, True)

    def test_url_exist(self):
        """Test that file url exist in proto."""
        st.link_button("the label", url="https://streamlit.io")

        c = self.get_delta_from_queue().new_element.link_button
        self.assertTrue("https://streamlit.io" in c.url)

    @parameterized.expand(["primary", "secondary", "tertiary"])
    def test_type(self, type):
        """Test that it can be called with type param."""
        st.link_button("the label", url="https://streamlit.io", type=type)

        c = self.get_delta_from_queue().new_element.link_button
        self.assertEqual(c.type, type)

    def test_use_container_width_can_be_set_to_true(self):
        """Test use_container_width can be set to true."""
        st.link_button("label", url="https://streamlit.io", use_container_width=True)

        c = self.get_delta_from_queue().new_element.link_button
        self.assertEqual(c.use_container_width, True)

    def test_use_container_width_is_false_by_default(self):
        """Test use_container_width is false by default."""
        st.link_button("the label", url="https://streamlit.io")

        c = self.get_delta_from_queue().new_element.link_button
        self.assertEqual(c.use_container_width, False)

    def test_emoji_icon(self):
        """Test that it can be called with an emoji icon."""
        st.link_button("the label", url="https://streamlit.io", icon="🎈")

        c = self.get_delta_from_queue().new_element.link_button
        self.assertEqual(c.icon, "🎈")

    def test_material_icon(self):
        """Test that it can be called with a material icon."""
        st.link_button("the label", url="https://streamlit.io", icon=":material/bolt:")

        c = self.get_delta_from_queue().new_element.link_button
        self.assertEqual(c.icon, ":material/bolt:")

    def test_invalid_icon(self):
        """Test that an error is raised if an invalid icon is provided."""
        with self.assertRaises(StreamlitAPIException) as e:
            st.link_button("the label", url="https://streamlit.io", icon="invalid")
        self.assertEqual(
            str(e.exception),
            'The value "invalid" is not a valid emoji. Shortcodes are not allowed, please use a single character instead.',
        )
