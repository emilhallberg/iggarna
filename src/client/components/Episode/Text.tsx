import Colors from "src/client/resources/stylesheets/colors";
import media from "src/client/resources/stylesheets/media";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SText = styled(motion.div)`
  grid-area: text;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 16px;
  margin-left: 48px;
  color: ${Colors.text};
  @media (${media.phone}) {
    margin-left: 0;
  }
`;

interface TextProps {
  children: ReactNode;
}

const Text: FC<TextProps> = ({ children }: TextProps) => (
  <SText
    animate={{
      y: [100, 0],
      opacity: [0, 1],
    }}
  >
    {children}
  </SText>
);

export default Text;
