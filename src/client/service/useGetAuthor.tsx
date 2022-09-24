import service from "src/client/service/index";
import { Author } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetAuthor {
  author?: Author;
  loading: boolean;
  error: string;
}

const useGetAuthor = (id: Author["id"]): UseGetAuthor => {
  const { data, error } = useSWR(`/api/author/${id}`, service.get);

  return { author: data && data[0], loading: !data, error };
};

export default useGetAuthor;
