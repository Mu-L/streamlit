/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2025)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Raw data (in Apache Arrow format) for a dataframe
// to be used in a VegaLite chart.
//
// data = np.random.randn(10, 3)
// df = pd.DataFrame(data, columns=["a", "b", "c"])

export const VEGA_LITE = new Uint8Array([
  255, 255, 255, 255, 120, 3, 0, 0, 16, 0, 0, 0, 0, 0, 10, 0, 14, 0, 6, 0, 5,
  0, 8, 0, 10, 0, 0, 0, 0, 1, 4, 0, 16, 0, 0, 0, 0, 0, 10, 0, 12, 0, 0, 0, 4,
  0, 8, 0, 10, 0, 0, 0, 176, 2, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 8,
  0, 12, 0, 4, 0, 8, 0, 8, 0, 0, 0, 136, 2, 0, 0, 4, 0, 0, 0, 120, 2, 0, 0,
  123, 34, 105, 110, 100, 101, 120, 95, 99, 111, 108, 117, 109, 110, 115, 34,
  58, 32, 91, 123, 34, 107, 105, 110, 100, 34, 58, 32, 34, 114, 97, 110, 103,
  101, 34, 44, 32, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117, 108, 108, 44,
  32, 34, 115, 116, 97, 114, 116, 34, 58, 32, 48, 44, 32, 34, 115, 116, 111,
  112, 34, 58, 32, 49, 48, 44, 32, 34, 115, 116, 101, 112, 34, 58, 32, 49, 125,
  93, 44, 32, 34, 99, 111, 108, 117, 109, 110, 95, 105, 110, 100, 101, 120,
  101, 115, 34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 110, 117,
  108, 108, 44, 32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58,
  32, 110, 117, 108, 108, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121,
  112, 101, 34, 58, 32, 34, 117, 110, 105, 99, 111, 100, 101, 34, 44, 32, 34,
  110, 117, 109, 112, 121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 111, 98,
  106, 101, 99, 116, 34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34,
  58, 32, 123, 34, 101, 110, 99, 111, 100, 105, 110, 103, 34, 58, 32, 34, 85,
  84, 70, 45, 56, 34, 125, 125, 93, 44, 32, 34, 99, 111, 108, 117, 109, 110,
  115, 34, 58, 32, 91, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 97, 34, 44,
  32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32, 34, 97,
  34, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101, 34, 58,
  32, 34, 102, 108, 111, 97, 116, 54, 52, 34, 44, 32, 34, 110, 117, 109, 112,
  121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 102, 108, 111, 97, 116, 54, 52,
  34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 110, 117,
  108, 108, 125, 44, 32, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 98, 34,
  44, 32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32, 34,
  98, 34, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101, 34,
  58, 32, 34, 102, 108, 111, 97, 116, 54, 52, 34, 44, 32, 34, 110, 117, 109,
  112, 121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 102, 108, 111, 97, 116, 54,
  52, 34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32, 110,
  117, 108, 108, 125, 44, 32, 123, 34, 110, 97, 109, 101, 34, 58, 32, 34, 99,
  34, 44, 32, 34, 102, 105, 101, 108, 100, 95, 110, 97, 109, 101, 34, 58, 32,
  34, 99, 34, 44, 32, 34, 112, 97, 110, 100, 97, 115, 95, 116, 121, 112, 101,
  34, 58, 32, 34, 102, 108, 111, 97, 116, 54, 52, 34, 44, 32, 34, 110, 117,
  109, 112, 121, 95, 116, 121, 112, 101, 34, 58, 32, 34, 102, 108, 111, 97,
  116, 54, 52, 34, 44, 32, 34, 109, 101, 116, 97, 100, 97, 116, 97, 34, 58, 32,
  110, 117, 108, 108, 125, 93, 44, 32, 34, 99, 114, 101, 97, 116, 111, 114, 34,
  58, 32, 123, 34, 108, 105, 98, 114, 97, 114, 121, 34, 58, 32, 34, 112, 121,
  97, 114, 114, 111, 119, 34, 44, 32, 34, 118, 101, 114, 115, 105, 111, 110,
  34, 58, 32, 34, 52, 46, 48, 46, 49, 34, 125, 44, 32, 34, 112, 97, 110, 100,
  97, 115, 95, 118, 101, 114, 115, 105, 111, 110, 34, 58, 32, 34, 49, 46, 50,
  46, 52, 34, 125, 0, 0, 0, 0, 6, 0, 0, 0, 112, 97, 110, 100, 97, 115, 0, 0, 3,
  0, 0, 0, 108, 0, 0, 0, 48, 0, 0, 0, 4, 0, 0, 0, 176, 255, 255, 255, 0, 0, 1,
  3, 16, 0, 0, 0, 20, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 99, 0, 0, 0,
  162, 255, 255, 255, 0, 0, 2, 0, 216, 255, 255, 255, 0, 0, 1, 3, 16, 0, 0, 0,
  20, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 98, 0, 0, 0, 202, 255, 255,
  255, 0, 0, 2, 0, 16, 0, 20, 0, 8, 0, 6, 0, 7, 0, 12, 0, 0, 0, 16, 0, 16, 0,
  0, 0, 0, 0, 1, 3, 16, 0, 0, 0, 24, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 97, 0, 6, 0, 8, 0, 6, 0, 6, 0, 0, 0, 0, 0, 2, 0, 255, 255, 255, 255, 232,
  0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 12, 0, 22, 0, 6, 0, 5, 0, 8, 0, 12, 0, 12,
  0, 0, 0, 0, 3, 4, 0, 24, 0, 0, 0, 240, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 24,
  0, 12, 0, 4, 0, 8, 0, 10, 0, 0, 0, 124, 0, 0, 0, 16, 0, 0, 0, 10, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0,
  160, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 0, 0, 0, 0, 0, 0, 0,
  80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 165, 207, 229, 243, 142, 57, 252,
  63, 78, 49, 227, 105, 89, 237, 1, 64, 233, 149, 50, 211, 31, 103, 238, 63,
  102, 41, 103, 240, 62, 71, 218, 63, 19, 234, 144, 201, 107, 90, 232, 63, 228,
  149, 229, 144, 235, 90, 213, 63, 132, 145, 1, 29, 77, 9, 212, 63, 102, 41,
  111, 139, 113, 234, 228, 63, 189, 197, 191, 28, 117, 40, 2, 64, 56, 164, 25,
  241, 163, 245, 199, 191, 83, 137, 204, 250, 44, 156, 217, 63, 218, 61, 177,
  124, 132, 225, 253, 63, 54, 132, 211, 73, 172, 95, 195, 191, 237, 225, 170,
  13, 5, 112, 194, 63, 144, 179, 147, 8, 24, 38, 191, 63, 59, 153, 77, 117,
  191, 231, 247, 63, 240, 133, 126, 150, 192, 84, 235, 191, 108, 144, 114, 26,
  118, 169, 235, 63, 13, 58, 13, 241, 20, 69, 247, 191, 199, 135, 90, 127, 67,
  134, 248, 63, 171, 201, 34, 82, 210, 81, 239, 63, 130, 140, 165, 66, 220, 69,
  239, 191, 89, 180, 200, 248, 140, 108, 186, 191, 247, 133, 253, 75, 180, 68,
  247, 63, 203, 117, 34, 85, 65, 104, 220, 63, 182, 106, 176, 64, 160, 66, 202,
  191, 58, 58, 176, 236, 133, 108, 4, 192, 217, 47, 92, 219, 208, 191, 231,
  191, 93, 117, 165, 14, 169, 109, 167, 63, 14, 0, 109, 87, 126, 130, 247, 63,
  255, 255, 255, 255, 0, 0, 0, 0,
])
