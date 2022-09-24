import { GetServerSideProps, NextPage } from "next";
import { Avatar, List, Typography } from "antd";
import Link from "next/link";
import Page from "../../client/layout/Page";
import useSearch from "../../client/service/useSearch";
import Header from "../../client/components/Header";
import {
  Article as ArticleInterface,
  Image as ImageInterface,
  Author as AuthorInterface,
  Team as TeamInterface,
} from "../../constants/interfaces";
import { articles, authors, images, teams } from "../../client/routes/routes";

const renderArticle = ({ id, title, date }: ArticleInterface) => (
  <List.Item key={id}>
    <List.Item.Meta
      title={<Link href={`${articles.path}/${id}`}>{title}</Link>}
      description={<Typography.Text type="secondary">{date}</Typography.Text>}
    />
  </List.Item>
);

const renderImage = ({ id, src, alt, date }: ImageInterface) => (
  <List.Item key={id}>
    <List.Item.Meta
      title={<Link href={`${images.path}${id}`}>{`${alt} (${id})`}</Link>}
      description={<Typography.Text type="secondary">{date}</Typography.Text>}
      avatar={<Avatar src={src} alt={alt} shape="square" />}
    />
  </List.Item>
);

const renderAuthor = ({ id, name }: AuthorInterface) => (
  <List.Item key={id}>
    <List.Item.Meta
      title={<Link href={`${authors.path}/${id}`}>{name}</Link>}
    />
  </List.Item>
);

const renderTeam = ({ id, name }: TeamInterface) => (
  <List.Item key={id}>
    <List.Item.Meta title={<Link href={`${teams.path}/${id}`}>{name}</Link>} />
  </List.Item>
);

interface Props {
  value: string;
}

const SearchPage: NextPage<Props> = ({ value }) => {
  const { result, loading } = useSearch(value);

  return (
    <Page title="Search">
      <Header back>{value}</Header>
      <List
        header="Referat"
        loading={loading}
        dataSource={result?.articles || []}
        renderItem={renderArticle}
      />
      <List
        header="Skribenter"
        loading={loading}
        dataSource={result?.authors || []}
        renderItem={renderAuthor}
      />
      <List
        header="Lag"
        loading={loading}
        dataSource={result?.teams || []}
        renderItem={renderTeam}
      />
      <List
        header="Bilder"
        loading={loading}
        dataSource={result?.images || []}
        renderItem={renderImage}
      />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: { value: decodeURI(context.query.value as string) },
});

export default SearchPage;
