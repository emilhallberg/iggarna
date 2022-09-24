import IIK from "src/client/resources/assets/logo";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const SLogo = styled.a`
  grid-area: logo;
  display: grid;
  width: calc(${({ theme }) => theme.dimensions.header.height} / 2);
  height: calc(${({ theme }) => theme.dimensions.header.height} / 2);
  align-self: center;
`;

const Logo: FC = () => (
  <Link href="/" passHref>
    <SLogo>
      <IIK />
    </SLogo>
  </Link>
);

export default Logo;
