import styled, { css } from "styled-components";

import { mediaMaxQuery } from "../Global/style-variables";

import {
  displayFlex,
  flex,
  onHoverFocus,
  hoverTransitionSlow,
} from "../Global/style-variables";

export const PortfolioList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 20px 40px;

  ${mediaMaxQuery("770px", () => {
    return css`
      grid-template-columns: repeat(2, 40%);
      justify-content: center;
    `;
  })}

  ${mediaMaxQuery("600px", () => {
    return css`
      grid-template-columns: repeat(1, 70%);
    `;
  })}

  ${mediaMaxQuery("500px", () => {
    return css`
      grid-template-columns: repeat(1, 80%);
    `;
  })}

  .portfolio-item {
    ${hoverTransitionSlow};
    ${flex("0 0 31%")};
    box-shadow: 0 1px 4px 0px rgb(0 0 0 / 20%);
    border-radius: 6px;
    margin-bottom: 2.5rem;

    .portfolio-inner {
      ${displayFlex("unset", "unset")};
      flex-direction: column;
      padding: 5%;

      .thumbnail-wrapper {
        ${displayFlex("center", "center")};
        ${flex("0 0 160px")};
        background-color: ${(props) => props.theme.color?.lightGray2};
        border-radius: 6px;

        img {
          max-width: 140px;
          display: block;
          margin: 0 auto;
        }
      }

      .text-icon-wrapper {
        ${displayFlex("space-between", "center")};
        margin-top: 1rem;

        .text-wrapper {
          h3 {
            font-family: "proxima-light";
            font-size: 1.3rem;
            color: ${(props) => props.theme.color?.black};
            margin: 0 0 0.5rem;
          }

          span {
            color: ${(props) => props.theme.color?.gray};
          }
        }

        .icon-wave_arrow-right {
          ${hoverTransitionSlow};
          font-size: 2rem;
          opacity: 0.5;
          color: ${(props) => props.theme?.color?.gray};
        }
      }
    }

    ${onHoverFocus(() => {
      return css`
        box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 20%);

        .text-icon-wrapper {
          .icon-wave_arrow-right {
            opacity: 1;
            color: ${(props) => props.theme?.color?.red};
            transform: scale(1.2);
          }
        }
      `;
    })}
  }
`;
