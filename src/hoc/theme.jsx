import React from "react";
import { ThemeProvider } from "styled-components";
import mediaQueries from "Components/Utils/mediaQueries";
import colors from "Components/Utils/colors";

const Theme = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        ...mediaQueries,
        colors
      }}
    >
      {children}
    </ThemeProvider>
  );
};
export default Theme;
