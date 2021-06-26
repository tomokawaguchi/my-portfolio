import styled, { css } from "styled-components";
import { displayFlex, flex, onHoverFocus, hoverTransition } from "../Global/style-variables";

export const SocialWrapper = styled.div`
  .social-list {
    ${displayFlex("unset", "unset")}
    list-style-type: none;
    padding: 0;
    margin: 0;

    .social-item {
      ${flex("0 0 33px")};
      margin: 0 0.5rem;

      .social-link {
        ${hoverTransition};
        ${displayFlex("center", "center")};
        background: ${(props) => props.theme?.color?.cream};
        border: 1px solid ${(props) => props.theme?.color?.red};
        border-radius: 80px;
        width: 25px;
        height: 25px;
        padding: 3px;

        .custom-icon {
          color: ${(props) => props.theme?.color?.red};
        }

        ${onHoverFocus(() => {
          return css`
            background: ${(props) => props.theme?.color?.red};

            .custom-icon {
              color: ${(props) => props.theme?.color?.cream};
            }
          `;
        })}
      }
    }
  }
`;
