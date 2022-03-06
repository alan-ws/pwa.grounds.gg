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
    SectionHeading: {
      fontFamily: "Inter",
      fontSize: ["1rem", "4rem"],
      fontWeight: 700,
      letterSpacing: "-0.06em",
      lineHeight: 'initial'
    },
    SectionSubHeading: {
      fontFamily: "Inter",
      fontSize: ["1rem", "2rem"],
      fontWeight: 400,
      letterSpacing: "-0.06em",
      lineHeight: 'initial'
    },
    SectionSubHeadingTwo: {
      fontFamily: "Inter",
      fontSize: ["1rem", "3rem"],
      fontWeight: 700,
      letterSpacing: "-0.06em",
      lineHeight: 'initial'
    },
    SectionsHeading: {
      fontFamily: "Inter",
      fontSize: ["1rem", "1.75rem"],
      fontWeight: 500,
      letterSpacing: "-0.06em",
      lineHeight: 'initial',
    },
    TinyHeading: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "0.9rem"],
      fontWeight: 700,
      letterSpacing: "0.06em",
    },
    Number: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "1rem"],
      fontWeight: 900,
    },
    Label: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "1.5rem"],
      fontWeight: 700,
      color: 'white'
    },
    CardHeading: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "1.25rem"],
      fontWeight: 700,
      letterSpacing: "-0.04em",
      color: '#808080'
    },
    body3: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "1.25rem"],
      fontWeight: 400,
      letterSpacing: "-0.04em",
      color: '#808080'
    },
    outerLink: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "1rem"],
      fontWeight: 700,
      color: '#000',
      textDecoration: "underline"
    },
    gameLabel: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "1rem"],
      fontWeight: 700,
      color: '#000',
      marginTop: '2rem',
      marginBottom: '1rem',
    },
    visitGameSite: {
      fontFamily: "Inter",
      fontSize: ["0.5rem", "1rem"],
      fontWeight: 700,
      marginBottom: '1.25rem'
    }
  },
};

export const theme = extendTheme({ ...colors, ...text });
