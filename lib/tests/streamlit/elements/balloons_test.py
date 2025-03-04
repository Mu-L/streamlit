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

"""Balloons unit test."""

import pytest

import streamlit as st
from tests.delta_generator_test_case import DeltaGeneratorTestCase


class BalloonsTest(DeltaGeneratorTestCase):
    """Test ability to marshall balloons protos."""

    def test_st_balloons(self):
        """Test st.balloons."""
        st.balloons()
        el = self.get_delta_from_queue().new_element
        self.assertEqual(el.balloons.show, True)

    @pytest.mark.usefixtures("benchmark")
    def test_st_balloons_perf(self):
        """
        Simple test to measure performance of st.balloons. Since the underlying
        code doesn't do too much, this is a good baseline benchmark test.
        Additionally, this is a simple use case for ensuring the infra for
        `pytest-benchmark` is working in unittest-style tests.
        """
        self.benchmark(st.balloons)
