import usePagination, { UsePagination } from "src/client/utils/usePagination";
import { Article, Author } from "src/constants/interfaces";

interface UseGetArticlesByAuthors extends UsePagination {
  articles?: Article[];
}

const useGetArticlesByAuthors = (id: Author["id"]): UseGetArticlesByAuthors => {
  const { data, loading, error, hasMore, loadMore, length } =
    usePagination<Article>(`/api/author/${id}/article`);

  return { articles: data, loading, error, hasMore, loadMore, length };
};

export default useGetArticlesByAuthors;
