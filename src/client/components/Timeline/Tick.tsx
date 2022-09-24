import HistoryContext from "src/client/contexts/HistoryContext";
import { episodes } from "src/client/mock/episodes";
import Colors from "src/client/resources/stylesheets/colors";
import media from "src/client/resources/stylesheets/media";
import { hexa } from "src/client/utils/utils";
import { FC, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Fonts from "../../resources/stylesheets/fonts";

const STick = styled(motion.div)`
  position: absolute;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: ${Colors.text};
  cursor: pointer;
  @media (${media.phone}) {
    height: 8px;
    width: 8px;
  }
`;

const SLabel = styled(motion.h6)`
  position: absolute;
  top: -38px;
  left: 0;
  transform: rotate(-58deg);
  color: ${Colors.text};
  cursor: pointer;
  font-size: ${Fonts.Size.small};
  @media (${media.phone}) {
    top: -25px;
    font-size: ${Fonts.Size.smallX};
  }
`;

const transition = {
  scale: { stiffness: 200, damping: 200, duration: 0.2 },
};

interface TickProps {
  position: number;
}

const Tick: FC<TickProps> = ({ position }: TickProps) => {
  const { length, page, goToPage } = useContext(HistoryContext);
  const active = position === page || position < page + 1;

  return (
    <STick
      whileHover={{
        scale: 1.2,
        background: Colors.text,
      }}
      whileTap={{ scale: 0.95 }}
      style={{ left: `calc(${(position / (length - 1)) * 100}% - 6px)` }}
      animate={{
        scale: active ? 1.2 : 1,
        background: active ? Colors.text : hexa(Colors.text, -100),
      }}
      transition={transition}
      onClick={() => goToPage(position)}
    >
      <SLabel>{episodes[position].year}</SLabel>
    </STick>
  );
};

export default Tick;
