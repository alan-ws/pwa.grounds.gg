import { Flex, keyframes, Text } from "@chakra-ui/react";
import { Keyframes } from "@emotion/serialize";
import { FC, useEffect, useRef } from "react";
import { Container } from "./containers";

const colorChangeOne = `
  0%, 16.667%, 100% {
    opacity: 1;
  }

  33.333%, 83.333% {
    opacity: 0;
  }
`;

const colorChangeTwo = `
  0%, 16.667%, 66.667%, 100% {
    opacity:0
  }

  33.333%, 50% {
    opacity: 1;
  }
`;

const colorChangeThree = `
  0%, 50%, 100% {
    opacity: 0;
  }

  66.667%, 83.333% {
    opacity: 1;
  }
`;

const GradientText: FC<{ content: string; animationKeyframes: string; }> = ({ children, content, animationKeyframes }) => {
  return <Text
    as="span"
    _before={{
      content: `'${content}'`,
      position: "absolute",
      zIndex: 1,
      background: "linear-gradient(60deg, #eee, #333)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: `${keyframes`${animationKeyframes}`} 4s infinite`,
    }}
  >
    {children}
  </Text>
}

export const Header = () => {
  return (
    <Container>
      <Flex as="header" flexDirection="column" alignItems="center">
        <Text
          as="h1"
          textStyle="Statment"
          userSelect="none"
          position="relative"
        >
          <GradientText content="Play." animationKeyframes={colorChangeOne}>Play.</GradientText>
        </Text>
        <Text as="h1" textStyle="Statment">
          <GradientText content="Earn." animationKeyframes={colorChangeTwo}>Earn.</GradientText>
        </Text>
        <Text as="h1" textStyle="Statment">
          <GradientText content="Repeat." animationKeyframes={colorChangeThree}>Repeat.</GradientText>
        </Text>
      </Flex>
    </Container>
  );
};
