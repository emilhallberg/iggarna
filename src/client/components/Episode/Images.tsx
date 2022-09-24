import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Carousel, Image } from "antd";

const SImages = styled(motion.div)`
  grid-area: images;
`;

export interface ImageInterface {
  id: string;
  src: string;
  alt: string;
}

export interface ImagesProps {
  data: ImageInterface[];
}

const createImage = ({ src, alt, id }: ImageInterface) => (
  <Image
    key={id}
    src={src}
    alt={alt}
    preview={{
      mask: alt,
    }}
    height="40vh"
  />
);

const Images: FC<ImagesProps> = ({ data }: ImagesProps) => (
  <SImages
    animate={{
      x: [100, 0],
      opacity: [0, 1],
    }}
  >
    <Carousel autoplay dotPosition="right" dots={false} adaptiveHeight>
      {data.map(createImage)}
    </Carousel>
  </SImages>
);

export default Images;
