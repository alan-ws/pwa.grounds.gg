import { Flex, keyframes, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Container } from "./containers";

// {
//     background: "-webkit-linear-gradient(#eee, #333)",
//     "-webkit-background-clip": "text",
//     "-webkit-text-fill-color": "transparent",
//   }

const colorChange = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

export const Header = () => {
  const play = useRef<HTMLParagraphElement>(null);
  const earn = useRef<HTMLParagraphElement>(null);
  const repeat = useRef<HTMLParagraphElement>(null);

  return (
    <Container>
      <Flex as="header" flexDirection={"column"} alignItems="center">
        <Text
          as="h1"
          textStyle="Statment"
          userSelect={"none"}
          sx={{ content: "'Play.'", padding: "0.05em" }}
        >
          <Text
            as="span"
            _before={{
              content: "'Play.'",
              position: "absolute",
              display: "block",
              width: "100%",
              textAlign: "center",
              color: "black",
              top: 0,
              bottom: 0,
              left: 0,
              zIndex: 0,
              paddingLeft: "0.05em",
              paddingRight: "0.05em",
              animation: `${colorChange} 8s infinite`,
            }}
            sx={{
              position: "relative",
              zIndex: 1,
              background: "linear-gradient(90deg,#eee, #333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animation={`${colorChange} 8s infinite`}
          >
            Play.
          </Text>
        </Text>
        <Text ref={earn} as="h1" textStyle="Statment">
          Earn.
        </Text>
        <Text ref={repeat} as="h1" textStyle="Statment">
          Repeat.
        </Text>
      </Flex>
    </Container>
  );
};
