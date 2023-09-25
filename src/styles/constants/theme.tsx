import { ThemeProvider } from "styled-components";
import * as React from "react";

interface Theme {
  background: {
    primary: string;
  };
}

const theme: Theme = {
  background: {
    primary: "red",
  },
};

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default ThemeWrapper;
