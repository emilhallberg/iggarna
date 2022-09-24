import { List } from "antd";
import Page from "src/client/layout/Page";
import useGetTeams from "src/client/service/useGetTeams";
import { Team } from "src/constants/interfaces";
import type { NextPage } from "next";
import Link from "next/link";
import Header from "../../client/components/Header";
import TeamAvatar from "../../client/components/TeamAvatar";
import { teams as route } from "../../client/routes/routes";

const createYearInterval = (start: string, end: string): string =>
  `${new Date(start).getFullYear()} - ${new Date(end).getFullYear()}`;

export const createTeam = ({ id, name, start, end }: Team) => (
  <List.Item key={id} extra={<Link href={`${route.path}/${id}`}>Visa</Link>}>
    <List.Item.Meta
      title={<Link href={`${route.path}/${id}`}>{name}</Link>}
      description={createYearInterval(start, end)}
      avatar={<TeamAvatar name={name} />}
    />
  </List.Item>
);

const TeamsPage: NextPage = () => {
  const { teams, loading } = useGetTeams();

  return (
    <Page title="Lag">
      <Header>Lag</Header>
      <List loading={loading} dataSource={teams} renderItem={createTeam} />
    </Page>
  );
};

export default TeamsPage;
