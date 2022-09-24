import Colors from "src/client/resources/stylesheets/colors";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const SCard = styled(motion.div)`
  display: grid;
  padding: 16px;
  border-radius: 4px;
  background-color: ${Colors.element};
  border: thin solid ${Colors.primary};
`;

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }: CardProps) => (
  <SCard>{children}</SCard>
);

export default Card;
