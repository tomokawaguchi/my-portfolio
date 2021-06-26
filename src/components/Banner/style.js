import styled, { css } from "styled-components";

import { displayFlex, flex, onHoverFocus, lineTransition, hoverTransition, mediaMaxQuery } from "../Global/style-variables";

export const BannerWrapper = styled.section`
  background-color: ${(props) => props.theme.color?.cream};
  border-bottom: 1px solid ${(props) => props.theme.color?.lightGray3};

  #banner-section > .inner-wrapper {
    ${displayFlex("space-between", "unset")};

    .col {
      ${flex("0 0 50%")};
    }

    .col-1 .col-inner {
      margin: 2rem 0 5rem;

      h1 {
        margin: 1rem 0;
      }

      #title-text {
        font-family: "proxima-bold";
        font-size: 1.625rem;
        color: #757575;
      }

      p {
        color: #757575;
      }
    }

    .col-2 {
      align-self: flex-end;
    }

    .col-2 .col-inner {
      ${displayFlex("flex-end", "flex-end")};

      .profile-image,
      .portfolio-banner {
        max-width: 85%;
        ${mediaMaxQuery("1040px", () => {
          return css`
            max-width: 75%;
          `;
        })}
      }
    }

    ${mediaMaxQuery("770px", () => {
      return css`
        flex-direction: column;

        .col-2 {
          align-self: center;
          margin-top: 2rem;

          .col-inner {
            justify-content: center;

            .profile-image,
            .portfolio-banner {
              max-width: 65%;
          }
        }
      `;
    })}
  }
`;

export const SingleBannerWrapper = styled.section`
  .breadcrumb-wrapper {
    ul {
      ${displayFlex("unset", "center")};

      li > a {
        color: ${(props) => props.theme.color?.red};
        ${lineTransition};

        ${onHoverFocus(() => {
          return css`
            border-bottom: 1px solid ${(props) => props.theme.color?.red};
          `;
        })}
      }

      li.portfolio {
        &:before {
          content: "/";
          margin: 0 1rem;
          color: ${(props) => props.theme.color?.gray};
        }
      }
    }
  }

  .header-wrapper { 
    ${displayFlex("space-between", "center")};
    border-bottom: 1px solid ${(props) => props.theme.color?.lightGray3};

    h1 {
      font-size: 3rem;
      font-family: "proxima-light";
    }

    .icon-tooltip-wrapper {
      ${hoverTransition};
      ${displayFlex("center", "unset")}; 
      position: relative;

      .tooltip-span {
        ${hoverTransition};
        ${displayFlex("center", "unset")};
        position: absolute;
        color: ${(props) => props.theme.color?.cream};
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        text-transform: capitalize;
        text-align: center;
        bottom: 140%;
        width: 110px;
        padding 5px;
        visibility: hidden;
        opacity: 0;

        &:after {
          position: absolute;
          content: "";
          border-color: rgba(0, 0, 0, 0.6) transparent transparent transparent;
          border-width: 10px;
          border-style: solid;
          top: 100%;
          height: 10px;
        }
      }

      ${onHoverFocus(() => {
        return css`
          transform: translateY(-3px);

          .tooltip-span {
            visibility: visible;
            opacity: 1;
          }
        `;
      })}

      span > .github {
        font-size: 2.2rem;
      }

      span > .web-arrow {
        font-size: 2.4rem;
      }
    }
  }

  .project-type {
    ${displayFlex("space-between", "center")};
    margin-top: 1rem;
  }
`;
