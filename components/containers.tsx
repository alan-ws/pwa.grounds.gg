import { Flex } from "@chakra-ui/react";
import { FC } from "react";

export const Container: FC = ({ children }) => (
  <Flex flexDirection={"column"} maxWidth={"920px"} margin={"0 auto"}>
    {children}
  </Flex>
);
