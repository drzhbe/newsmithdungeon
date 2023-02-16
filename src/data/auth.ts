import useSWRImmutable from "swr/immutable";
import useSWRMutation from "swr/mutation";
import { baseUrl } from "../config";
import { isErrorResponse } from "../typeguards";
import { ServerError, User } from "../types";

const AUTH_PATH = "auth";

type AuthResponse =
  | {
      user: User;
      token: string;
    }
  | ServerError;

export const useAuth = () => {
  const response = useSWRImmutable<AuthResponse>(AUTH_PATH);
  const loading = !response.data && !response.error;
  const { auth, error } = isErrorResponse(response.data)
    ? { auth: undefined, error: response.data.message || response.data.error }
    : { auth: response.data, error: response.error };
  console.log("### { auth, error }", { auth, error });
  return { auth, loading, error };
};

type SigninPayload = { email: string; password: string };

export const useSignin = () => {
  const sendRequest = (url: string, { arg }: { arg: SigninPayload }) => {
    return fetch(`${baseUrl}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    })
      .then((r) => r.json())
      .catch((e) => {
        throw e;
      });
  };
  const response = useSWRMutation(AUTH_PATH, sendRequest);
  const { auth, error } = isErrorResponse(response.data)
    ? { auth: undefined, error: response.data.message || response.data.error }
    : { auth: response.data, error: response.error };
  return {
    auth,
    signin: response.trigger,
    loading: response.isMutating,
    error,
  };
};

type SignupPayload = { email: string; password: string };

export const useSignup = () => {
  const sendRequest = (url: string, { arg }: { arg: SignupPayload }) => {
    return fetch(`${baseUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    })
      .then((r) => r.json())
      .catch((e) => {
        throw e;
      });
  };
  const response = useSWRMutation(AUTH_PATH, sendRequest);
  const { auth, error } = isErrorResponse(response.data)
    ? { auth: undefined, error: response.data.message || response.data.error }
    : { auth: response.data, error: response.error };
  return {
    auth,
    signup: response.trigger,
    loading: response.isMutating,
    error,
  };
};
