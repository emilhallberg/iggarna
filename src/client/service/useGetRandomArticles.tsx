import { Article } from "src/constants/interfaces";
import useSWR from "swr";
import service from "./index";

interface UseGetArticles {
  articles: Article[];
  loading: boolean;
  error: string;
}

const useGetArticles = (): UseGetArticles => {
  const { data, error } = useSWR("/api/article/random", service.get, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { articles: data, loading: !data, error };
};

export default useGetArticles;
