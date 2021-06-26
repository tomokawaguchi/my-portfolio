import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  color: {
    red: "#742424",
    cream: "#FDF8F3",
    black: "#333333",
    gray: "#757575",
    lightGray: "#FAFAFA",
    lightGray2: "#F2F3F5",
    lightGray3: "#DDDDDD",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
