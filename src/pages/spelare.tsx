import { Avatar, List } from "antd";
import Page from "src/client/layout/Page";
import type { NextPage } from "next";
import styled from "styled-components";
import EndlessScroll from "../client/components/EndlessScroll";
import Header from "../client/components/Header";
import useGetPlayers from "../client/service/useGetPlayers";
import { Player } from "../constants/interfaces";
import { getInitials, stringToColor } from "../client/utils/utils";

const SAvatar = styled(Avatar)`
  height: 150px;
  width: 100px;
  display: grid;
  align-items: center;
`;

export const createPlayer = ({ id, name, src, alt }: Player) => (
  <List.Item key={id}>
    <List.Item.Meta
      title={name}
      description={alt}
      avatar={
        <SAvatar
          shape="square"
          src={src}
          alt={alt}
          style={{ backgroundColor: stringToColor(name) }}
        >
          {getInitials(name)}
        </SAvatar>
      }
    />
  </List.Item>
);

const PlayersPage: NextPage = () => {
  const { players, loading, hasMore, loadMore, length } = useGetPlayers();

  return (
    <Page title="Spelare">
      <Header>Spelare</Header>
      <EndlessScroll loadMore={loadMore} hasMore={hasMore} length={length}>
        <List
          loading={loading}
          dataSource={players}
          renderItem={createPlayer}
        />
      </EndlessScroll>
    </Page>
  );
};

export default PlayersPage;
