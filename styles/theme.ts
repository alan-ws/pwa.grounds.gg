import { extendTheme } from "@chakra-ui/react";

const animations = {
  fadeInFadeOut: (time: number) => {
    return {
      "-webkit-animation": `fadeinout ${time}s linear forwards`,
      animation: `fadeinout ${time}s linear forwards`,
    };
  },
};

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
      fontSize: ["48px", "160px"],
      fontWeight: "bold",
      lineHeight: "100%",
      letterSpacing: "-8px",
    },
  },
};

export const theme = extendTheme({ ...colors, ...text });
