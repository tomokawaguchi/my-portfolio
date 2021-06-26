import styled, { css } from "styled-components";
import { displayFlex, mediaMaxQuery } from "../Global/style-variables";

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme?.color?.lightGray};
  border-top: ${(props) => props.theme.color?.lightGray3} solid 1px;

  .inner-wrapper {
    ${displayFlex("space-between", "unset")}
    padding: 1.6rem 0;

    .copyright {
      color: ${(props) => props.theme?.color?.gray};
    }

    ${mediaMaxQuery("600px", () => {
      return css`
        flex-direction: column;
        align-items: center;

        .copyright {
          margin-top: 1rem;
          order: 1;
        }
      `;
    })}
  }
`;
