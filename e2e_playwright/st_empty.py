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

import streamlit as st

st.text("The space between this...")
st.text("..and this should be the same as between this...")
st.empty()
st.text("...and this")

replace_hello_text_button_clicked = st.button(
    "Click here to replace text with a chart!"
)
replace_chart_button_clicked = st.button(
    "Click here to replace chart with st.write with `placeholder.container`!"
)
empty_button_clicked = st.button("Empty the placeholder!")

placeholder = st.empty()

# Replace the placeholder with some text:
placeholder.text("Hello")
st.text("last element")

if replace_hello_text_button_clicked:
    # Replace the text with a chart:
    placeholder.line_chart({"data": [1, 5, 2, 6]})

if replace_chart_button_clicked:
    # # Replace the chart with several elements:
    with placeholder.container():
        st.write("This is one element")
        st.write("This is another")

# # Clear all those elements:
if empty_button_clicked:
    placeholder.empty()
