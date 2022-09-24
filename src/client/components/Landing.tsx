import { Button } from "antd";
import Logo from "src/client/resources/assets/logo";
import Colors from "src/client/resources/stylesheets/colors";
import media from "src/client/resources/stylesheets/media";
import { EventHandler, FC, SyntheticEvent } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pulse } from "./Loader";

const SLanding = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr max-content max-content 1fr;
  grid-template-areas: ". . ." ". logo ." ". button ." ". . .";
  grid-gap: 32px;
  justify-items: center;
  height: 100%;
  width: 100%;

  @media (${media.phone}) {
    grid-gap: 16px;
    grid-template-columns: 16px 1fr 16px;
  }
`;

const SLogo = styled(Logo)`
  grid-area: logo;
  color: ${Colors.text};
  height: 100%;
  width: 100%;
`;

const SClick = styled(Button)`
  grid-area: button;
  animation: ${pulse} 1500ms ease-in-out infinite;
  border: none;
  font-size: 3vw;
  height: 100%;
`;

interface LandingProps {
  onClick: EventHandler<SyntheticEvent>;
}

const Landing: FC<LandingProps> = ({ onClick }: LandingProps) => (
  <SLanding>
    <SLogo />
    <SClick onClick={onClick}>Klicka här för att börja</SClick>
  </SLanding>
);

export default Landing;
