import { FC } from "react";
import { AutoComplete, Avatar, Input, Typography } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSearch from "../../service/useSearch";
import { Article, Author, Image, Team } from "../../../constants/interfaces";
import useDebounce from "../../utils/useDebounce";
import { DEBOUNCE } from "../../../constants/constants";
import { articles, authors, images, teams } from "../../routes/routes";

const Option = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-gap: 8px;
  align-items: center;
`;

const Label = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const renderArticle = ({ id, title, date }: Article) => ({
  key: `${articles.path}/${id}`,
  value: title,
  label: (
    <Link href={`${articles.path}/${id}`} passHref>
      <Option key={id}>
        {title}
        <Typography.Text type="secondary">{date}</Typography.Text>
      </Option>
    </Link>
  ),
});

export const renderAuthor = ({ id, name }: Author) => ({
  key: `${authors.path}/${id}`,
  value: name,
  label: (
    <Link href={`${authors.path}/${id}`} passHref>
      <Option key={id}>{name}</Option>
    </Link>
  ),
});

export const renderTeam = ({ id, name }: Team) => ({
  key: `${teams.path}/${id}`,
  value: name,
  label: (
    <Link href={`${teams.path}/${id}`} passHref>
      <Option key={id}>{name}</Option>
    </Link>
  ),
});

export const renderImage = ({ id, src, alt }: Image) => ({
  key: `${images.path}/${id}`,
  value: `${alt} (${src})`,
  label: (
    <Link href={`${images.path}/${id}`} passHref>
      <Option key={id}>
        <Avatar src={src} alt={alt} shape="square" />
        {`${alt} (${src})`}
      </Option>
    </Link>
  ),
});

export const renderLabel = (label: string, count: number) => (
  <Label>
    <Typography.Text type="secondary">{label}</Typography.Text>
    <Typography.Text type="secondary">{`${count} st`}</Typography.Text>
  </Label>
);

const Search: FC = () => {
  const [value, setValue] = useDebounce<string>("", DEBOUNCE);
  const { result, loading } = useSearch(value);
  const { push } = useRouter();

  const options = result && [
    {
      key: "articles",
      label: renderLabel("Referat", result.articles.length),
      options: result.articles.map(renderArticle),
    },
    {
      key: "authors",
      label: renderLabel("Skribenter", result.authors.length),
      options: result.authors.map(renderAuthor),
    },
    {
      key: "teams",
      label: renderLabel("Lag", result.teams.length),
      options: result.teams.map(renderTeam),
    },
    {
      key: "images",
      label: renderLabel("Bilder", result.images.length),
      options: result.images.map(renderImage),
    },
  ];

  return (
    <AutoComplete
      options={options}
      style={{ gridArea: "search" }}
      // @ts-expect-error Weird type from Antd
      onSelect={(_, { key }) => push(key as string)}
      onChange={setValue}
    >
      <Input.Search
        loading={loading}
        placeholder="Sök"
        size="large"
        allowClear
        onSearch={() => push(`/sok/${value}`)}
        autoFocus
      />
    </AutoComplete>
  );
};

export default Search;
