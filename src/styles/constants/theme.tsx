import * as React from "react";
import { ThemeProvider } from "styled-components";
interface Theme {
  color: {
    buttonBackgroundColor: string;
  };
}

const theme: Theme = {
  color: {
    buttonBackgroundColor: "var(--button-background-color)",
  },
};

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default ThemeWrapper;
