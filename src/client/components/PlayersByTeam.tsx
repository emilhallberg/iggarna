import { List } from "antd";
import useGetPlayersByTeam from "src/client/service/useGetPlayersByTeam";
import { Team } from "src/constants/interfaces";
import { FC } from "react";
import { createPlayer } from "../../pages/spelare";

interface Props {
  id: Team["id"];
}

const PlayersByTeam: FC<Props> = ({ id }: Props) => {
  const { players, loading } = useGetPlayersByTeam(id);

  return (
    <List loading={loading} dataSource={players} renderItem={createPlayer} />
  );
};

export default PlayersByTeam;
