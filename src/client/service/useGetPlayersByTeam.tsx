import service from "src/client/service/index";
import { Player, Team } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetPlayersByTeam {
  players: Player[];
  loading: boolean;
  error: string;
}

const useGetPlayersByTeam = (id: Team["id"]): UseGetPlayersByTeam => {
  const { data, error } = useSWR(`/api/team/${id}/player`, service.get);

  return { players: data, loading: !data, error };
};

export default useGetPlayersByTeam;
