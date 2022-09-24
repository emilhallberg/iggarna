import { List } from "antd";
import Article from "src/client/components/Article";
import EndlessScroll from "src/client/components/EndlessScroll";
import { Author } from "src/constants/interfaces";
import { FC } from "react";
import useGetArticlesByAuthor from "../service/useGetArticlesByAuthor";

interface Props {
  id: Author["id"];
}

const ArticlesByTeam: FC<Props> = ({ id }: Props) => {
  const { articles, loading, hasMore, loadMore, length } =
    useGetArticlesByAuthor(id);

  return (
    <EndlessScroll loadMore={loadMore} hasMore={hasMore} length={length}>
      <List loading={loading} dataSource={articles} renderItem={Article} />
    </EndlessScroll>
  );
};

export default ArticlesByTeam;
