import { Button, Result } from "antd";
import Page from "src/client/layout/Page";
import Logo from "src/client/resources/assets/logo";
import { home } from "src/client/routes/routes";
import Link from "next/link";
import styled from "styled-components";

const SLogo = styled(Logo)`
  height: 250px;
  width: 250px;
`;

const extra = (
  <Link href={home.path} passHref>
    <Button>Till startsidan</Button>
  </Link>
);

const PageNotFound = () => (
  <Page title="404">
    <Result
      icon={<SLogo />}
      title="404"
      subTitle="Sidan du sökte finns inte"
      extra={extra}
    />
  </Page>
);

export default PageNotFound;
