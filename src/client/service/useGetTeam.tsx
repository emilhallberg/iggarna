import service from "src/client/service/index";
import { Team } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetArticle {
  team?: Team;
  loading: boolean;
  error: string;
}

const useGetTeam = (id: Team["id"]): UseGetArticle => {
  const { data, error } = useSWR(`/api/team/${id}`, service.get);

  return { team: data && data[0], loading: !data, error };
};

export default useGetTeam;
