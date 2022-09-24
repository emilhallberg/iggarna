import Tick from "src/client/components/Timeline/Tick";
import HistoryContext from "src/client/contexts/HistoryContext";
import Colors from "src/client/resources/stylesheets/colors";
import { hexa } from "src/client/utils/utils";
import { FC, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SLine = styled(motion.div)`
  grid-area: timeline;
  background: ${hexa(Colors.text, -100)};
  z-index: 10;
  position: relative;
  display: grid;
  align-items: center;
`;

const STime = styled(motion.div)`
  height: 4px;
  background: ${Colors.text};
`;

const Timeline: FC = () => {
  const { page, length } = useContext(HistoryContext);
  const width = `${(page / (length - 1)) * 100}%`;

  return (
    <SLine>
      <STime
        animate={{ width }}
        transition={{
          width: { stiffness: 200, damping: 100, duration: 0.5 },
        }}
      />
      {[...new Array(length)].map((_, i) => (
        <Tick key={i.toString()} position={i} />
      ))}
    </SLine>
  );
};

export default Timeline;
