import { createGlobalStyle, css } from "styled-components";
import { mediaMaxQuery } from "./style-variables";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'proxima-bold';
    src: url("/fonts/proxima-bold.otf");
  }
  @font-face {
    font-family: 'proxima-light';
    src: url("/fonts/proxima-light.otf");
  }
  @font-face {
    font-family: 'fontello';
    src: url('/fonts/fontello.eot?51451109');
    src: url('/fonts/fontello.eot?51451109#iefix') format('embedded-opentype'),
         url('/fonts/fontello.woff?51451109') format('woff'),
         url('/fonts/fontello.ttf?51451109') format('truetype'),
         url('/fonts/fontello.svg?51451109#fontello') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    margin: 0;
  }

  html {
    font-size: 100%;

    ${mediaMaxQuery("1040px", () => {
      return css`
        font-size: 85%;
      `;
    })}
  }

  body {
    font-family: 'proxima-light';
    color: ${(props) => props.theme.color?.black};
    overflow-x: hidden;

    &.active-menu {
      overflow: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'proxima-bold';
    line-height: 1.2;
  }

  h1 {
    font-size: 4rem;
    margin: 4rem 0;
  }
  h2 {
    font-size: 3rem;
    margin: 3rem 0;
  }
  h3 {
    font-size: 2.6rem; 
    margin: 2.6rem 0;
  }
  h4 {
    font-size: 2.2rem;
    margin: 2.2rem 0;
  }
  h5 {
    font-size: 2rem;
    margin: 2rem 0;
  }
  h6 {
    font-size: 1.8rem;
    margin: 1.8rem 0;
  }

  a {
    text-decoration: none;
  }

  p, li {
    font-size: 1.25rem;
    line-height: 1.7;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li > a {
    color: ${(props) => props.theme.color?.black};
  }
  i.custom-icon {
    font-family: "fontello";
      font-style: normal;
      font-weight: normal;
      font-size: 1.3rem; 
      color: ${(props) => props.theme.color?.red};
  }

  .site-section {
    padding: 0 6rem;

    .standard-padding {
      padding: 5rem 0;
    }

    &.alter-panel {
      background-color: ${(props) => props.theme.color?.lightGray};
      border-top: ${(props) => props.theme.color?.lightGray3} solid 1px;
      border-bottom: ${(props) => props.theme.color?.lightGray3} solid 1px;
    }

    > .inner-wrapper {
      max-width: 1040px;
      margin: 0 auto;
    }

    ${mediaMaxQuery("895px", () => {
      return css`
        padding: 0 3rem;
      `;
    })}
    ${mediaMaxQuery("450px", () => {
      return css`
        padding: 0 1rem;
      `;
    })}
  }

  .home-main-section h2 {
    margin-top: 0;
  }
`;
