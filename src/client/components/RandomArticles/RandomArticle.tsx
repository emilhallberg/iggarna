import { List, Space, Typography } from "antd";
import { Article as ArticleInterface } from "src/constants/interfaces";
import Link from "next/link";
import { FC } from "react";
import TeamAvatar from "../TeamAvatar";
import { articles } from "../../routes/routes";

const RandomArticle: FC<ArticleInterface> = ({
  id,
  title,
  date,
  team,
  score,
}: ArticleInterface) => (
  <List.Item key={id} extra={<Link href={`${articles.path}/${id}`}>Läs</Link>}>
    <List.Item.Meta
      title={<Link href={`${articles.path}/${id}`}>{title}</Link>}
      description={
        <Space split="|" style={{ overflow: "hidden" }}>
          <Typography.Text type="secondary">{date}</Typography.Text>
          <Typography.Text type="secondary">{score}</Typography.Text>
        </Space>
      }
      avatar={<TeamAvatar name={team} />}
    />
  </List.Item>
);

export default RandomArticle;
