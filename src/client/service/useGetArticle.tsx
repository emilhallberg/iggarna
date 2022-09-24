import service from "src/client/service/index";
import { Article } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetArticle {
  article?: Article;
  loading: boolean;
  error: string;
}

const useGetArticle = (id: string): UseGetArticle => {
  const { data, error } = useSWR(`/api/article/${id}`, service.get);

  return { article: data && data[0], loading: !data, error };
};

export default useGetArticle;
