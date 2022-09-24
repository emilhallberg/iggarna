import usePagination, { UsePagination } from "src/client/utils/usePagination";
import { Article, Team } from "src/constants/interfaces";

interface UseGetArticlesByTeam extends UsePagination {
  articles?: Article[];
}

const useGetArticlesByTeam = (id: Team["id"]): UseGetArticlesByTeam => {
  const { data, loading, error, hasMore, loadMore, length } =
    usePagination<Article>(`/api/team/${id}/article`);

  return { articles: data, loading, error, hasMore, loadMore, length };
};

export default useGetArticlesByTeam;
