import styled from "styled-components";
import { FC } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import media from "../../resources/stylesheets/media";
import Search from "./Search";

const SHeader = styled.header`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: ${({ theme }) => theme.dimensions.header.height};
  grid-gap: calc(${({ theme }) => theme.dimensions.header.height} / 2);
  align-items: center;
  grid-template-areas: "logo search menu";
  @media (${media.phone}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content max-content;
    grid-template-areas: "logo menu" "search search";
    grid-gap: 5vw;
    padding: 5vw 0;
  }
`;

const Header: FC = () => (
  <SHeader>
    <Logo />
    <Search />
    <Menu />
  </SHeader>
);

export default Header;
