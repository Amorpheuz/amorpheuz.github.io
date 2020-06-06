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
    surface: "#2E303E",
    modes: {
      light: {
        text: "#1b262c",
        muted: "#311d3f",
        primary: "#384259",
        secondary: "#f73859",
        success: "#48ADA9",
        background: "#f9f7f7",
        surface: "#EDE8E8"
      }
    }
  },
  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit"
      }
    },
    li: {
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
