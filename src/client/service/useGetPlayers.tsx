import usePagination, { UsePagination } from "src/client/utils/usePagination";
import { Player } from "src/constants/interfaces";

interface UseGetImages extends UsePagination {
  players?: Player[];
}

const useGetImages = (): UseGetImages => {
  const { data, loading, error, hasMore, loadMore, length } =
    usePagination<Player>(`/api/player`);

  return { players: data, loading, error, hasMore, loadMore, length };
};

export default useGetImages;
