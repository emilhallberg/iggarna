import media from "src/client/resources/stylesheets/media";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Fonts from "../../resources/stylesheets/fonts";

const SSubTitle = styled(motion.h3)`
  grid-area: subTitle;
  margin-left: 48px;
  font-size: ${Fonts.Size.largeX};
  @media (${media.phone}) {
    margin-left: 0;
  }
`;

interface TitleProps {
  children: ReactNode;
}

const SubTitle: FC<TitleProps> = ({ children }: TitleProps) => (
  <SSubTitle
    animate={{
      x: [200, 0],
    }}
  >
    {children}
  </SSubTitle>
);

export default SubTitle;
