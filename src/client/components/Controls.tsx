import Timeline from "src/client/components/Timeline";
import Colors from "src/client/resources/stylesheets/colors";
import media from "src/client/resources/stylesheets/media";
import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SControls = styled(motion.div)`
  position: absolute;
  bottom: -2vw;
  left: 5vw;
  right: 5vw;
  display: grid;
  grid-template-areas: "timeline";
  z-index: 10;
  align-items: center;
  grid-gap: 64px;
  @media (${media.phone}) {
    position: fixed;
    background-color: ${Colors.background};
    bottom: 5vw;
    left: 0;
    right: 0;
    grid-gap: 16px;
    grid-template-columns: 1fr;
    grid-template-rows: 32px;
    grid-template-areas: "timeline";
    padding: 0 calc(5vw + 6px);
  }
`;

const Controls: FC = () => (
  <SControls>
    <Timeline />
  </SControls>
);

export default Controls;
