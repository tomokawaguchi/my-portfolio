import styled, { css } from "styled-components";
import { displayFlex, onHoverFocus, hoverTransition } from "../Global/style-variables";

export const PaginationWrapper = styled.ul`
  ${displayFlex("center", "center")};
  list-style-type: none;
  padding: 0;

  .skip-link {
    margin: 0 0.5rem;

    a {
      font-size: 1rem;
      color: ${(props) => props.theme.color?.red};
    }
  }

  .portfolio-text {
    ${hoverTransition};
    ${displayFlex("center", "center")};
    font-size: 1rem;
    color: ${(props) => props.theme.color?.red};
    border: 1px solid ${(props) => props.theme.color?.red};
    border-radius: 50px;
    height: 7px;
    width: 7px;
    padding: 10px;
    margin: 0 0.3rem;
  }

  .portfolio-text:not(.active) {
    ${onHoverFocus(() => {
      return css`
        color: ${(props) => props.theme.color?.cream};
        background-color: ${(props) => props.theme.color?.red};
      `;
    })}
  }
`;

export const IsActive = styled.div`
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color?.cream} !important;
      background-color: ${(props) => props.theme.color?.red};
    `};
`;
