import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery(["cat"], async () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  const refetchedData = () => {
    alert("Refetching data");
    refetch();
  };
  return [data, refetchedData, isCatLoading, error];
};
