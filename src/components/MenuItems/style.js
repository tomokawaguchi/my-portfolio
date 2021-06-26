import styled, { css } from "styled-components";
import { displayFlex, onHoverFocus, lineTransition } from "../Global/style-variables";

export const MenuWrapper = styled.nav`
  .menu-list {
    ${displayFlex("unset", "unset")};
    list-style-type: none;
    padding: 0;
    margin: 0;

    // Styling for footer as default
    .menu-item {
      margin: 0 1rem;
      .menu-link {
        font-size: 1.125rem;
        color: ${(props) => props.theme?.color?.gray};

        ${onHoverFocus(() => {
          return css`
            ${lineTransition};
            color: ${(props) => props.theme?.color?.red};
          `;
        })}
      }

      // Styling for header menu
      ${(props) =>
        props.type &&
        props.type === "header" &&
        css`
          .menu-link {
            color: ${(props) => props.theme?.color?.red};
            font-family: "proxima-bold";

            ${onHoverFocus(() => {
              return css`
                ${lineTransition};
                border-bottom: ${(props) => props.theme?.color?.red} solid 2px;
              `;
            })}
          }
        `};
    }
  }
`;
