import Page from "src/client/layout/Page";
import { Result } from "antd";

const SearchPage = () => (
  <Page title="Sök">
    <Result
      title="Djupdyk ner i historiska referat"
      subTitle="Använd sökrutan i toppen av sidan"
    />
  </Page>
);

export default SearchPage;
