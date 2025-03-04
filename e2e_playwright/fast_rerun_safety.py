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

import time

import streamlit as st
from streamlit import runtime

if runtime.exists():
    if "counter" not in st.session_state:
        st.session_state.counter = 0
    st.button("rerun")

    st.write(st.session_state.counter)
    time.sleep(3)
    st.write(st.session_state.counter)
    live = st.empty()
    for _ in range(50):
        st.session_state.counter += 1
        live.write(f"live: {st.session_state.counter}")
        time.sleep(0.1)
