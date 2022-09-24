import service from "src/client/service";
import useSWRInfinite from "swr/infinite";

export interface UsePagination {
  loading: boolean;
  error: string;
  loadMore: () => void;
  hasMore: boolean;
  length: number;
}

export interface UsePaginationGeneric<T> extends UsePagination {
  data?: T[];
}

const usePagination = <T,>(url: string): UsePaginationGeneric<T> => {
  const { data, error, setSize } = useSWRInfinite(
    (page) => `${url}?page=${page + 1 || 1}`,
    service.get,
  );

  const loadMore = async () => setSize((s) => s + 1);
  const loading = !data;
  const length = data?.length || 0;

  const isEmpty = data && data[0].length === 0;
  const isFull = data && data[data.length - 1].length === 10;
  const hasMore = isEmpty || isFull || false;

  return {
    data: data ? [].concat(...data) : [],
    loading,
    error,
    loadMore,
    length,
    hasMore,
  };
};

export default usePagination;
