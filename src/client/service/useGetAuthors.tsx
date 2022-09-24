import service from "src/client/service/index";
import { Author } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetAuthors {
  authors: Author[];
  loading: boolean;
  error: string;
}

const useGetAuthors = (): UseGetAuthors => {
  const { data, error } = useSWR("/api/author", service.get);

  return { authors: data, loading: !data, error };
};

export default useGetAuthors;
