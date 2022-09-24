import service from "src/client/service/index";
import { Author } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetAuthors {
  authors: Author[];
  loading: boolean;
  error: string;
}

const useGetTopAuthors = (): UseGetAuthors => {
  const { data, error } = useSWR("/api/author/top", service.get);

  return { authors: data, loading: !data, error };
};

export default useGetTopAuthors;
