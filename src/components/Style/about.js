import styled, { css } from "styled-components";

import { displayFlex, flex, mediaMaxQuery } from "../Global/style-variables";

export const Panel1Wrapper = styled.section`
  .inner-wrapper {
    h2 {
      font-family: "proxima-light";
      margin-top: 0;
    }
    p > #bold-text {
      font-family: "proxima-bold";
    }
  }
`;

export const Panel2Wrapper = styled.section`
  .panel-inner {
    ${displayFlex("unset", "unset")};

    .col {
      ${flex("0 0 50%")};

      h3 {
        font-family: "proxima-light";
        margin-top: 0;
      }

      h4 {
        font-size: 1.25rem;
        margin: 1.25rem 0;
      }

      li {
        margin-bottom: 1.2rem;

        > span {
          display: block;
        }
      }
    }

    ${mediaMaxQuery("850px", () => {
      return css`
        flex-wrap: wrap;

        .col {
          ${flex("100%")};
        }
      `;
    })}
  }
`;
