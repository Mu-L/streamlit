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

import React, { ReactElement } from "react"

import { useTheme } from "@emotion/react"

import { PageLink as PageLinkProto } from "@streamlit/protobuf"

import { DynamicIcon } from "~lib/components/shared/Icon"
import { Placement } from "~lib/components/shared/Tooltip"
import { BaseButtonTooltip } from "~lib/components/shared/BaseButton"
import StreamlitMarkdown from "~lib/components/shared/StreamlitMarkdown"
import { EmotionTheme } from "~lib/theme"
import { LibContext } from "~lib/components/core/LibContext"
import IsSidebarContext from "~lib/components/core/IsSidebarContext"

import {
  StyledNavLink,
  StyledNavLinkContainer,
  StyledNavLinkText,
} from "./styled-components"

export interface Props {
  disabled: boolean
  element: PageLinkProto
  width: number
}

function shouldUseContainerWidth(
  useContainerWidth: boolean | null | undefined,
  isInSidebar: boolean
): boolean {
  if (useContainerWidth === null && isInSidebar) {
    return true
  } else if (useContainerWidth === null && !isInSidebar) {
    return false
  }
  return useContainerWidth === true ? true : false
}

function PageLink(props: Readonly<Props>): ReactElement {
  const { onPageChange, currentPageScriptHash } = React.useContext(LibContext)
  const isInSidebar = React.useContext(IsSidebarContext)

  const { colors }: EmotionTheme = useTheme()

  const { disabled, element, width } = props
  const style = { width }

  const useContainerWidth = shouldUseContainerWidth(
    element.useContainerWidth,
    isInSidebar
  )

  const isCurrentPage = currentPageScriptHash === element.pageScriptHash

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (element.external) {
      // External Page Link
      if (disabled) {
        e.preventDefault()
      }
    } else {
      // MPA Page Link
      e.preventDefault()
      if (!disabled) {
        onPageChange(element.pageScriptHash)
      }
    }
  }

  return (
    <div className="stPageLink" data-testid="stPageLink" style={style}>
      <BaseButtonTooltip help={element.help} placement={Placement.TOP_RIGHT}>
        <StyledNavLinkContainer>
          <StyledNavLink
            data-testid="stPageLink-NavLink"
            disabled={disabled}
            isCurrentPage={isCurrentPage}
            fluidWidth={useContainerWidth ? width : false}
            href={element.page}
            target={element.external ? "_blank" : ""}
            rel="noreferrer"
            onClick={handleClick}
          >
            {element.icon && (
              <DynamicIcon
                size="lg"
                color={disabled ? colors.fadedText40 : colors.bodyText}
                iconValue={element.icon}
              />
            )}
            <StyledNavLinkText disabled={disabled}>
              <StreamlitMarkdown
                source={element.label}
                allowHTML={false}
                isLabel
                boldLabel={isCurrentPage}
                largerLabel
                disableLinks
              />
            </StyledNavLinkText>
          </StyledNavLink>
        </StyledNavLinkContainer>
      </BaseButtonTooltip>
    </div>
  )
}

export default PageLink
