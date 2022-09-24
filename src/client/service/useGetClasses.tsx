import service from "src/client/service/index";
import { Class } from "src/constants/interfaces";
import useSWR from "swr";

interface UseGetClasses {
  classes: Class[];
  loading: boolean;
  error: string;
}

const useGetClasses = (): UseGetClasses => {
  const { data, error } = useSWR("/api/class", service.get);

  return { classes: data, loading: !data, error };
};

export default useGetClasses;
