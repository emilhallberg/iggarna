import usePagination, { UsePagination } from "src/client/utils/usePagination";
import { Article } from "src/constants/interfaces";

interface UseGetArticles extends UsePagination {
  articles?: Article[];
}

const useGetArticles = (): UseGetArticles => {
  const { data, loading, error, hasMore, loadMore, length } =
    usePagination<Article>("/api/article");

  return {
    articles: data,
    loading,
    error,
    hasMore,
    loadMore,
    length,
  };
};

export default useGetArticles;
