import styled, { css } from "styled-components";

import { displayFlex, mediaMaxQuery } from "../Global/style-variables";

export const PortfolioSecWrapper = styled.section`
  .inner-wrapper {
    ${displayFlex("unset", "center")};
    flex-direction: column;

    h2 {
      font-family: "proxima-light";
      font-size: 2.2rem;
      max-width: 728px;
      width: 100%;
      margin: 0;
      margin-bottom: 1rem;
    }

    p {
      // 70% of 1040px max width
      max-width: 728px;
    }

    img {
      max-width: 1024px;
      margin: 2rem;

      ${mediaMaxQuery("1040px", () => {
        return css`
          max-width: 832px;
          margin: 2rem 0;
        `;
      })}

      ${mediaMaxQuery("870px", () => {
        return css`
          width: 100%;
        `;
      })}
    }
  }
`;

export const PortfolioResultWrapper = styled.section``;
