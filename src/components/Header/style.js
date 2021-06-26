import styled, { css } from "styled-components";
import { displayFlex, flex, hoverTransition, onHoverFocus, hoverScaleDown, customIcon, mediaMaxQuery } from "../Global/style-variables";

export const HeaderWrapper = styled.header`
  position: relative;
  padding-top: 1.5rem;
  margin-bottom: 3rem;
  z-index: 1;

  .inner-wrapper {
    ${displayFlex("space-between", "center")};

    .logo-wrapper {
      ${flex("0 0 55px")};
      display: block;
      z-index: 1;

      ${onHoverFocus(() => {
        return css`
          img {
            ${hoverScaleDown};
            transform: rotate(-10deg);
          }
        `;
      })};

      img {
        ${hoverTransition};
        max-width: 100%;
      }
    }

    .right-wrapper {
      ${displayFlex("unset", "center")};

      .social-wrapper {
        padding: 0;
        margin: 0;
      }
    }

    .hamburger-menu {
      display: none;

      .custom-icon {
        font-size: 2.3rem;
      }
    }

    ${mediaMaxQuery("770px", () => {
      return css`
        .right-wrapper {
          ${hoverTransition};
          ${displayFlex("unset", "flex-start")};
          flex-direction: column;
          position: fixed;
          background-color: ${(props) => props.theme.color?.red};
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          padding: 8rem 0 4rem;
          transform: translateX(-100vw);

          .menu-wrapper {
            width: 100%;
            margin-bottom: 1rem;

            .menu-list {
              flex-direction: column;

              .menu-item {
                border-bottom: 1px solid #833131;
                padding-bottom: 0.5rem;
                margin: 0 0 0.5rem;

                .menu-link {
                  ${displayFlex("space-between", "center")};
                  position: relative;
                  font-family: "proxima-light";
                  color: white;
                  padding: 0.3rem 4rem;
                  border-bottom: none;

                  &:after {
                    ${customIcon};
                    position: absolute;
                    content: "\\E804";
                    font-size: 1.1rem;
                    color: ${(props) => props.theme.color?.cream};
                    right: 4rem;
                  }

                  ${mediaMaxQuery("810px", () => {
                    return css`
                      padding: 0.3rem 3rem;

                      &:after {
                        right: 2rem;
                      }
                    `;
                  })}
                  ${mediaMaxQuery("450px", () => {
                    return css`
                      padding: 0.3rem 1rem;
                    `;
                  })}
                }
              }
            }
          }

          .social-wrapper {
            width: 100%;

            .social-list {
              margin: 0 4rem;
            }
          }

          ${(props) =>
            props.menuActive &&
            css`
              transform: translateX(0);

              + .hamburger-menu .custom-icon {
                color: white;
              }
            `};
        }

        .hamburger-menu {
          position: relative;
          display: block;
          background-color: transparent;
          border: none;
          cursor: pointer;
          z-index: 1;
        }
      `;
    })}
  }

  ${(props) =>
    props.scrollActive &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: white;
      box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1);
      padding: 0.7rem 6rem;

      ${mediaMaxQuery("810px", () => {
        return css`
          padding: 0.7rem 3rem;
        `;
      })}
      ${mediaMaxQuery("440px", () => {
        return css`
          padding: 0.7rem 1rem;
        `;
      })}
    `};
`;
