import Images from "src/client/components/Episode/Images";
import SubTitle from "src/client/components/Episode/SubTitle";
import Title from "src/client/components/Episode/Title";
import Text from "src/client/components/Episode/Text";
import HistoryContext from "src/client/contexts/HistoryContext";
import media from "src/client/resources/stylesheets/media";
import { FC, ReactNode, useContext } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const SEpisode = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const SContent = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  padding: 0 5vw 50px 5vw;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: max-content max-content 1fr;
  grid-template-areas: "title title" "subTitle images" "text images";
  grid-gap: 0 5vw;
  justify-content: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (${media.phone}) {
    grid-gap: 0;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, max-content);
    grid-template-areas: "title" "subTitle" "text" "images";
    overflow-y: auto;
    padding: 0;
    &:after {
      content: "";
      padding-top: 5vw;
      padding-bottom: 15vw;
    }
  }
`;

const variants = {
  enter: (direction: number) => ({
    zIndex: 0,
    x: direction > 0 ? "100vw" : "-100vw",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100vw" : "-100vw",
    opacity: 0,
  }),
};

const transition = {
  x: { stiffness: 200, damping: 100, duration: 0.5 },
  opacity: { duration: 0.2 },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

interface EpisodeComp<T> extends FC<T> {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
  Text: typeof Text;
  Images: typeof Images;
}

interface EpisodeProps {
  children: ReactNode;
}

const Episode: EpisodeComp<EpisodeProps> = ({ children }: EpisodeProps) => {
  const { page, direction, paginate } = useContext(HistoryContext);

  return (
    <AnimatePresence initial={true} custom={direction}>
      <SEpisode>
        <SContent
          layout
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {children}
        </SContent>
      </SEpisode>
    </AnimatePresence>
  );
};

Episode.Title = Title;
Episode.SubTitle = SubTitle;
Episode.Text = Text;
Episode.Images = Images;

export default Episode;
