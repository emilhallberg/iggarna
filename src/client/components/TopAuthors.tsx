import { Card, List } from "antd";
import { FC } from "react";
import Link from "next/link";
import { createAuthor } from "./AuthorsByTeam";
import useGetTopAuthors from "../service/useGetTopAuthors";
import { authors as route } from "../routes/routes";

const TopAuthors: FC = () => {
  const { authors, loading } = useGetTopAuthors();
  return (
    <Card
      title="Skribenter"
      loading={loading}
      extra={<Link href={route.path}>Se mer</Link>}
    >
      <List loading={loading} dataSource={authors} renderItem={createAuthor} />
    </Card>
  );
};

export default TopAuthors;
