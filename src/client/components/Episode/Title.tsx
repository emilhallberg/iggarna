import Fonts from "src/client/resources/stylesheets/fonts";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const STitle = styled(motion.h1)`
  grid-area: title;
  text-transform: uppercase;
  font-size: ${Fonts.Size.largeXXXXX};
  margin: 0;
`;

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }: TitleProps) => (
  <STitle
    animate={{
      x: [200, 0],
    }}
  >
    {children}
  </STitle>
);

export default Title;
