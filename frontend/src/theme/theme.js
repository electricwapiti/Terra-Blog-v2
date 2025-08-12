// theme.js
import { extendTheme } from "@chakra-ui/react";

const colors = {
  terra: {
    primary: "#5A4324",
    secondary: "#D8CAB8",
    accent: "#B4533C",
    bg: "#F6F4EF",
    contrast: "#2C2A1F",
    tertiary: "#7A8373",
  },
};

const fonts = {
  heading: "'Inter', sans-serif",
  body: "'Inter', sans-serif",
};

const components = {
  Button: {
    variants: {
      terra: {
        bg: "terra.accent",
        color: "terra.bg",
        padding: "0.6em 1.4em",
        borderRadius: "9999px", // pill shape
        fontWeight: 600,
        fontSize: "1rem",
        boxShadow: "0 2px 4px rgba(90, 67, 36, 0.2)",
        _hover: {
          bg: "terra.primary",
          color: "terra.bg",
          transform: "translateY(-2px)",
        },
        _focus: {
          boxShadow: "0 0 0 3px rgba(180, 83, 60, 0.6)", // a subtle focus ring with accent color
        },
      },
    },
  },
};

const styles = {
  global: {
    "html, body": {
      bg: "terra.bg",
      color: "terra.contrast",
      fontFamily: fonts.body,
      textAlign: "center",
      marginTop: "15px",
      marginBottom: "10px",
      fontSize: "1.1em",
    },
    header: {
      bg: "terra.primary",
      color: "terra.bg",
    },
    footer: {
      bg: "terra.primary",
      minHeight: "100px",
      padding: "20px 50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      width: "100%",
      color: "terra.bg",
    },
  },
};

const theme = extendTheme({ colors, fonts, components, styles });

export default theme;