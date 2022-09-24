import service from "src/client/service/index";
import { SearchResult } from "src/constants/interfaces";
import useSWR from "swr";

interface UseSearch {
  result: SearchResult;
  loading: boolean;
  error: string;
}

const useSearch = (value: string): UseSearch => {
  const { data, error, isValidating } = useSWR(
    value && value.length > 2 ? `/api/search?value=${value}` : null,
    service.get,
  );

  return { result: data, loading: isValidating, error };
};

export default useSearch;
