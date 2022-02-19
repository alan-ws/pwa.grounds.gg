import { Flex, ResponsiveValue } from "@chakra-ui/react";
import { FC } from "react";

type FlexDirection = 'row' | 'column'

export const Container: FC<{dir?: ResponsiveValue<FlexDirection>}> = ({ children, dir }) => (
  <Flex flexDirection={dir ?? "column"} maxWidth={"1200px"} margin={"0 auto"}>
    {children}
  </Flex>
);
