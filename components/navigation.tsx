import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ConnectWallet } from "./buttons";
import { Container } from "./containers";

export const NavBar = () => <Box as="nav" marginTop={"1em"}>
    <Container>
        <Flex width={"100%"} flexDirection="row">
            <Flex width={"50%"}>
                <Image src={'/logo.svg'} width="180px" height="64px" alt="logo" />
            </Flex>
            <Flex width={"50%"} justifyContent="flex-end" alignItems="center">
                <ConnectWallet />
            </Flex>
        </Flex>
    </Container>
</Box>