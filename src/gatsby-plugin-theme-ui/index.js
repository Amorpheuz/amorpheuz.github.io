import codeTheme from "@theme-ui/prism/presets/night-owl-light.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#FAC29A",
    muted: "#6C6F93",
    primary: "#F43E5C",
    secondary: "#09F7A0",
    success: "#25B2BC",
    background: "#1C1E26",
    surface: "#2E303E"
  },
  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit"
      }
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme
    }
  }
};
