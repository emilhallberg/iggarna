import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import svSE from "antd/lib/locale/sv_SE";
import Header from "../client/layout/Header";
import "antd/dist/antd.dark.css";
import Global from "../client/resources/stylesheets/global";
import theme from "../client/resources/stylesheets/theme";
import Countdown from "../client/components/Countdown";

const StyledApp = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr;
  padding: 0 5vw;
  position: relative;
  z-index: 0;
`;

const Main = styled.main`
  z-index: 1;
  margin-bottom: 5vw;
`;

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider locale={svSE}>
    <ThemeProvider theme={theme}>
      <Global />
      <StyledApp>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </StyledApp>
      <Countdown />
    </ThemeProvider>
  </ConfigProvider>
);

export default App;
