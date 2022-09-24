import service from "src/client/service/index";
import { Author, Team } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetAuthorsByTeam {
  authors: Author[];
  loading: boolean;
  error: string;
}

const useGetAuthorsByTeam = (id: Team["id"]): UseGetAuthorsByTeam => {
  const { data, error } = useSWR(`/api/team/${id}/author`, service.get);

  return { authors: data, loading: !data, error };
};

export default useGetAuthorsByTeam;
