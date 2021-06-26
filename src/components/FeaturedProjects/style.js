import styled, { css } from "styled-components";

import { displayFlex, flex, mediaMaxQuery } from "../Global/style-variables";

export const FeaturedWrapper = styled.section`
  .title-wrapper {
    ${displayFlex("unset", "center")};
    margin-bottom: 3rem;

    .decoration {
      ${flex("auto")};
      height: 1px;
      background-color: ${(props) => props.theme?.color?.lightGray3};
    }

    h2 {
      ${flex("0 0 340px")};
      font-size: 1.375rem;
      text-align: center;
      color: ${(props) => props.theme?.color?.gray};
      margin: 0;
    }

    ${mediaMaxQuery("540px", () => {
      return css`
        justify-content: center;

        .decoration {
          display: none;
        }
      `;
    })}
  }
`;
