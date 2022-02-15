import { Flex, Text } from "@chakra-ui/react";
import { Container } from "./containers";

export const Header = () => {
  return (
    <Container>
      <Flex as="header" flexDirection={"column"} alignItems="center">
        <Text
          as="h1"
          textStyle="Statment"
          __css={{
            fontSize: "500px",
          }}
        >
          Play.
        </Text>
        <Text as="h1" textStyle="Statment">
          Earn.
        </Text>
        <Text as="h1" textStyle="Statment">
          Repeat.
        </Text>
      </Flex>
    </Container>
  );
};
