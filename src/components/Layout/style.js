import styled from "styled-components";
import { flex } from "../Global/style-variables";

export const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .footer-wrapper {
    ${flex(1)};
    display: flex;
    align-items: flex-end;
  }

  .footer-wrapper,
  .footer-wrapper > .site-section {
    width: 100%;
  }
`;
