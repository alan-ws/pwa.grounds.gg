import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ConnectWallet } from "./buttons";
import { Container } from "./containers";

export const NavBar = () => <Box as="nav" marginTop={"1em"}>
    <Container>
        <Flex flex={1} flexDirection="row">
            <Flex flex={0.5}>
                <Image src={'/logo.svg'} width="180px" height="64px" />
            </Flex>
            <Flex flex={0.5} justifyContent="flex-end" alignItems="center">
                <ConnectWallet />
            </Flex>
        </Flex>
    </Container>
</Box>