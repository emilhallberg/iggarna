import { Card, List } from "antd";
import { FC } from "react";
import Link from "next/link";
import useGetRandomArticles from "../../service/useGetRandomArticles";
import RandomArticle from "./RandomArticle";
import { articles as route } from "../../routes/routes";

const RandomArticles: FC = () => {
  const { articles, loading } = useGetRandomArticles();

  return (
    <Card
      title="Referat"
      loading={loading}
      extra={<Link href={route.path}>Se mer</Link>}
    >
      <List
        loading={loading}
        dataSource={articles}
        renderItem={RandomArticle}
      />
    </Card>
  );
};

export default RandomArticles;
