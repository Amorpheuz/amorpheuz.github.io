import codeTheme from "@theme-ui/prism/presets/prism-funky.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#eaeaea",
    muted: "#B5B7CA",
    primary: "#ff2e63",
    secondary: "#08d9d6",
    success: "#27FB6B",
    background: "#252a34",
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
