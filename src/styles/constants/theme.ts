import themeInterface from "./themeInterface";
export const theme: themeInterface = {
  buttons: {
    primary: {
      background: "var(--button-background-color)",
      textColor: "var(--black-text-color)",
      borderRadius: "var(--page-border-radius)",
      textAlign: "center",
      fontSize: "var(--button-font-size)",
      fontWeight: 700,
      textDecoration: "none",
      textTransform: "uppercase",
      padding: "var(--button-padding-horizontal) 0",
    },
  },
  footer: {
    background: "var(--footer-background-color)",
    color: "var(--footer-text-primary-color)",
  },
};
