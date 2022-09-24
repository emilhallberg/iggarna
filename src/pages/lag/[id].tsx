import { Tabs } from "antd";
import ArticlesByTeam from "src/client/components/ArticlesByTeam";
import AuthorsByTeam from "src/client/components/AuthorsByTeam";
import ImagesByTeam from "src/client/components/ImagesByTeam";
import Page from "src/client/layout/Page";
import useGetTeam from "src/client/service/useGetTeam";
import { Team as TeamInterface } from "src/constants/interfaces";
import type { GetServerSideProps, NextPage } from "next";
import Header from "../../client/components/Header";
import PlayersByTeam from "../../client/components/PlayersByTeam";

interface Props {
  id: TeamInterface["id"];
}

const TeamPage: NextPage<Props> = ({ id }: Props) => {
  const { team } = useGetTeam(id);

  return (
    <Page title="Lag">
      <Header back>{team?.name}</Header>
      <Tabs>
        <Tabs.TabPane key={0} tab="Referat">
          <ArticlesByTeam id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane key={1} tab="Bilder">
          <ImagesByTeam id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane key={2} tab="Skribenter">
          <AuthorsByTeam id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane key={3} tab="Spelare">
          <PlayersByTeam id={id} />
        </Tabs.TabPane>
      </Tabs>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: { id: context.query.id },
});

export default TeamPage;
