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

export const GradientText: FC<{ content: string; colorString: string; animationKeyframes?: string; }> = ({ children, content, animationKeyframes, colorString }) => {
  return <Text
    as="span"
    _before={{
      content: `'${content}'`,
      position: "absolute",
      zIndex: 1,
      background: `linear-gradient(90deg, ${colorString})`,
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
          <GradientText content="Play." animationKeyframes={colorChangeOne} colorString="#6E3FD1, #4741BA">Play.</GradientText>
        </Text>
        <Text as="h1" textStyle="Statment">
          <GradientText content="Earn." animationKeyframes={colorChangeTwo} colorString="#54CAE3, #56CC73">Earn.</GradientText>
        </Text>
        <Text as="h1" textStyle="Statment">
          <GradientText content="Repeat." animationKeyframes={colorChangeThree} colorString="#FAB30F, #E34F19">Repeat.</GradientText>
        </Text>
      </Flex>
    </Container>
  );
};
