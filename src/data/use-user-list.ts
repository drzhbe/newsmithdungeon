import useSWRImmutable from "swr/immutable";
import { User } from "../types";

export const useUserList = () => {
  const { data, error, mutate } = useSWRImmutable<User[]>("user");
  const loading = !error && !data;
  return {
    users: data || [],
    loading,
  };
};
