import { List } from "antd";
import Page from "src/client/layout/Page";
import type { NextPage } from "next";
import useGetAuthors from "../../client/service/useGetAuthors";
import { createAuthor } from "../../client/components/AuthorsByTeam";
import Header from "../../client/components/Header";

const AuthorsPage: NextPage = () => {
  const { authors, loading } = useGetAuthors();

  return (
    <Page title="Skribenter">
      <Header>Skribenter</Header>
      <List loading={loading} dataSource={authors} renderItem={createAuthor} />
    </Page>
  );
};

export default AuthorsPage;
