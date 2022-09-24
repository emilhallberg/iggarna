import service from "src/client/service/index";
import { Image } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetImage {
  image?: Image;
  loading: boolean;
  error: string;
}

const useGetImage = (id: Image["id"]): UseGetImage => {
  const { data, error } = useSWR(`/api/image/${id}`, service.get);

  return { image: data && data[0], loading: !data, error };
};

export default useGetImage;
