import { Card, Descriptions, Space } from "antd";
import Loader from "src/client/components/Loader";
import Page from "src/client/layout/Page";
import useGetArticle from "src/client/service/useGetArticle";
import type { GetServerSideProps, NextPage } from "next";
import Header from "../../client/components/Header";
import { p } from "../../client/utils/utils";

interface Props {
  id: string;
}

const ArticlePage: NextPage<Props> = ({ id }: Props) => {
  const { article, loading, error } = useGetArticle(id);

  const isError = error && <p>Error</p>;
  const isLoading = loading && <Loader />;
  const isContent = article && (
    <Space direction="vertical" size={16}>
      <Header back>{article.title}</Header>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Lag">{article.team}</Descriptions.Item>
        <Descriptions.Item label="Resultat">{article.score}</Descriptions.Item>
        <Descriptions.Item label="Datum">{article.date}</Descriptions.Item>
        <Descriptions.Item label="Skribent">{article.author}</Descriptions.Item>
      </Descriptions>
      <Card title={article.title}>
        <div>{p(article.text)}</div>
      </Card>
    </Space>
  );

  return <Page title="Referat">{isError || isLoading || isContent}</Page>;
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: { id: context.query.id },
});

export default ArticlePage;
