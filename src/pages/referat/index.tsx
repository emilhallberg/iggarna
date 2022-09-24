import { List } from "antd";
import Article from "src/client/components/Article";
import EndlessScroll from "src/client/components/EndlessScroll";
import Page from "src/client/layout/Page";
import useGetArticles from "src/client/service/useGetArticles";
import type { NextPage } from "next";
import Header from "../../client/components/Header";

const ArticlesPage: NextPage = () => {
  const { articles, loading, loadMore, hasMore, length } = useGetArticles();

  return (
    <Page title="Referat">
      <Header>Referat</Header>
      <EndlessScroll loadMore={loadMore} hasMore={hasMore} length={length}>
        <List loading={loading} dataSource={articles} renderItem={Article} />
      </EndlessScroll>
    </Page>
  );
};

export default ArticlesPage;
