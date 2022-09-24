import { List, Space, Typography } from "antd";
import { p } from "src/client/utils/utils";
import { Article as ArticleInterface } from "src/constants/interfaces";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import TeamAvatar from "./TeamAvatar";
import media from "../resources/stylesheets/media";
import { articles } from "../routes/routes";

const SListItem = styled(List.Item)`
  display: grid;
  grid-auto-rows: max-content;
  .ant-list-item-meta-content {
    width: 100%;
  }
`;

const STextContainer = styled.div`
  padding-left: 55px;
  @media (${media.phone}) {
    padding-left: 0;
  }
`;

const Article: FC<ArticleInterface> = ({
  id,
  title,
  text,
  date,
  team,
  author,
  score,
}: ArticleInterface) => (
  <SListItem key={id}>
    <List.Item.Meta
      title={<Link href={`${articles.path}/${id}`}>{title}</Link>}
      description={
        <Space split="|" style={{ marginBottom: "12px" }}>
          <Typography.Text type="secondary">{date}</Typography.Text>
          <Typography.Text type="secondary">{score}</Typography.Text>
          <Typography.Text type="secondary">{author}</Typography.Text>
        </Space>
      }
      avatar={<TeamAvatar name={team} />}
    />
    <STextContainer>{p(text)}</STextContainer>
  </SListItem>
);

export default Article;
