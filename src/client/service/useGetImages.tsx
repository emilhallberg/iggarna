import usePagination, { UsePagination } from "src/client/utils/usePagination";
import { Image } from "src/constants/interfaces";

interface UseGetImages extends UsePagination {
  images?: Image[];
}

const useGetImages = (): UseGetImages => {
  const { data, loading, error, hasMore, loadMore, length } =
    usePagination<Image>(`/api/image`);

  return { images: data, loading, error, hasMore, loadMore, length };
};

export default useGetImages;
