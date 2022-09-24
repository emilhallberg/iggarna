import service from "src/client/service/index";
import { Team } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetTeams {
  teams: Team[];
  loading: boolean;
  error: string;
}

const useGetTeams = (): UseGetTeams => {
  const { data, error } = useSWR("/api/team", service.get);

  return { teams: data, loading: !data, error };
};

export default useGetTeams;
