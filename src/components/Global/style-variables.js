import { css } from "styled-components";

export const displayFlex = (justify, align) => {
  return css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export const flex = (value) => {
  return css`
    flex: ${value};
  `;
};

export const backgroundImageProperties = `
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const hoverTransition = `
  transition: all 0.25s ease-in-out;
`;

export const hoverTransitionSlow = `
  transition: all 0.4s ease-in-out;
`;

export const lineTransition = `
  transition: all 0.1s ease-in-out;
`;
export const hoverScaleDown = `
  transform: scale(0.9);
  opacity: 0.8;
  cursor: pointer;
`;

export const buttonReset = `
  background: none;
  border: none;
`;

export const onHoverFocus = (content) => {
  return css`
    &:hover,
    &:focus {
      ${content};
    }
  `;
};

export const mediaMaxQuery = (width, content) => {
  return css`
    @media only screen and (max-width: ${width}) {
      ${content};
    }
  `;
};

export const customIcon = css`
  font-family: "fontello";
`;
