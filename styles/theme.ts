import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  Gradient: {
    background: "-webkit-linear-gradient(#eee, #333)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
};

const text = {
  textStyles: {
    Statment: {
      fontFamily: "Inter",
      fontSize: ["2rem", "8rem"],
      fontWeight: 900,
      letterSpacing: "-0.06em",
      lineHeight: 'initial'
    },
  },
};

export const theme = extendTheme({ ...colors, ...text });
