import Page from "src/client/layout/Page";
import type { NextPage } from "next";
import styled from "styled-components";
import TopAuthors from "../client/components/TopAuthors";
import RandomArticles from "../client/components/RandomArticles";
import media from "../client/resources/stylesheets/media";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: column;
  grid-gap: 5vw;
  @media (${media.phone}) {
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-auto-flow: row;
  }
`;

const HomePage: NextPage = () => (
  <Page title="Hem">
    <Grid>
      <RandomArticles />
      <TopAuthors />
    </Grid>
  </Page>
);

export default HomePage;
