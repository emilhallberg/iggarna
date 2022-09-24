import { FC, ReactNode } from "react";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";
import { Affix, Button, Typography } from "antd";
import { useRouter } from "next/router";

const SHeader = styled.header`
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: calc(
    ${({ theme }) => theme.dimensions.header.height} / 2
  );
  align-content: center;
  grid-auto-flow: column;
  z-index: 1;
  h1 {
    margin: 0;
  }
`;

const Title = styled(Typography.Title)``;

const BackButton = styled(Button)`
  margin-right: 0.5em;
  align-self: center;
`;

interface Props {
  back?: boolean;
  children: ReactNode;
}

const Header: FC<Props> = ({ back, children }) => {
  const { back: goBack } = useRouter();
  return (
    <Affix offsetTop={0}>
      <SHeader>
        {back && (
          <BackButton
            type="text"
            onClick={goBack}
            shape="circle"
            icon={<LeftOutlined />}
          />
        )}
        <Title ellipsis>{children}</Title>
      </SHeader>
    </Affix>
  );
};

export default Header;
