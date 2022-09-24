import { Image } from "src/constants/interfaces";
import useSWR from "swr";
import service from "./index";

interface UseGetRandomImages {
  images: Image[];
  loading: boolean;
  error: string;
}

const useGetImagesByTeam = (): UseGetRandomImages => {
  const { data, error } = useSWR(`/api/image/random`, service.get);

  return { images: data, loading: !data, error };
};

export default useGetImagesByTeam;
