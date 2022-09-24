import Page from "src/client/layout/Page";
import { Author as AuthorInterface } from "src/constants/interfaces";
import type { GetServerSideProps, NextPage } from "next";
import ArticlesByAuthor from "../../client/components/ArticlesByAuthor";
import useGetAuthor from "../../client/service/useGetAuthor";
import Header from "../../client/components/Header";

interface Props {
  id: AuthorInterface["id"];
}

const AuthorPage: NextPage<Props> = ({ id }: Props) => {
  const { author } = useGetAuthor(id);

  return (
    <Page title="Lag">
      <Header back>{author?.name}</Header>
      <ArticlesByAuthor id={id} />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: { id: context.query.id },
});

export default AuthorPage;
