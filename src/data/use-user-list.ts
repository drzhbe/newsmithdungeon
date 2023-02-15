import useSWRImmutable from "swr/immutable";
import { User } from "../types";

type Error = { statusCode: number; message: string };

export const useUserList = () => {
  const response = useSWRImmutable<User[]>("user");
  const loading = !response.error && !response.data;
  return {
    users: response.data || [],
    loading,
    error:
      response.error ||
      // @ts-ignore
      (response.data?.statusCode === 401 && response.data?.message),
  };
};
