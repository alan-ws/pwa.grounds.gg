import { Button } from "@chakra-ui/react";
import { FC } from "react";

export const Base: FC = ({children}) => <Button padding={"1.5em 2em"}>{children}</Button>
export const ClaimAvatar = () => <Base>Claim avatar</Base>
export const JoinAlpha = () => <Base>Join alpha</Base>
export const ConnectWallet = () => <Base>Connect wallet</Base>