import Logo from "src/client/resources/assets/logo";
import Colors from "src/client/resources/stylesheets/colors";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

const SLoading = styled.div`
  display: grid;
  box-sizing: border-box;
`;

export const pulse = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.5;
    transform: scale(0.9);
  }
`;

const SLogo = styled(Logo)`
  justify-self: center;
  align-self: center;
  animation: ${pulse} 1000ms ease-in-out infinite;
  color: ${Colors.text};
  width: 50px;
  height: 50px;
  margin: 10px;
`;

const Loader: FC = () => (
  <SLoading>
    <SLogo />
  </SLoading>
);

export default Loader;
