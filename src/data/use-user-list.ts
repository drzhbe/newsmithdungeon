import useSWRImmutable from "swr/immutable";
import { isErrorResponse } from "../typeguards";
import { ServerError, User } from "../types";

export const useUserList = () => {
  const response = useSWRImmutable<User[] | ServerError>("user");
  const { users, error } = isErrorResponse(response.data)
    ? { users: [], error: response.data.message || response.data.error }
    : { users: response.data || [], error: response.error };
  const loading = !response.error && !response.data;
  return { users, loading, error };
};
