import { List } from "antd";
import Article from "src/client/components/Article";
import EndlessScroll from "src/client/components/EndlessScroll";
import useGetArticlesByTeam from "src/client/service/useGetArticlesByTeam";
import { Team } from "src/constants/interfaces";
import { FC } from "react";

interface Props {
  id: Team["id"];
}

const ArticlesByTeam: FC<Props> = ({ id }: Props) => {
  const { articles, loading, hasMore, loadMore, length } =
    useGetArticlesByTeam(id);

  return (
    <EndlessScroll loadMore={loadMore} hasMore={hasMore} length={length}>
      <List loading={loading} dataSource={articles} renderItem={Article} />
    </EndlessScroll>
  );
};

export default ArticlesByTeam;
