import usePagination, { UsePagination } from "src/client/utils/usePagination";
import { Image } from "src/constants/interfaces";

interface UseGetImagesByTeam extends UsePagination {
  images?: Image[];
}

const useGetImagesByTeam = (id: Image["id"]): UseGetImagesByTeam => {
  const { data, loading, error, hasMore, loadMore, length } =
    usePagination<Image>(`/api/team/${id}/image`);

  return { images: data, loading, error, hasMore, loadMore, length };
};

export default useGetImagesByTeam;
