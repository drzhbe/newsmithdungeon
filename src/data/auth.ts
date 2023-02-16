import useSWRImmutable from "swr/immutable";
import useSWRMutation from "swr/mutation";
import { baseUrl } from "../config";
import { isErrorResponse } from "../typeguards";
import { ServerError, User } from "../types";

const AUTH_PATH = "auth";

type AuthResponse = User | ServerError;

export const useAuth = () => {
  const response = useSWRImmutable<AuthResponse>(AUTH_PATH);
  const loading = !response.data && !response.error;
  const { user, error } = isErrorResponse(response.data)
    ? { user: undefined, error: response.data.message || response.data.error }
    : { user: response.data, error: response.error };
  return { user, loading, error };
};

type SigninPayload = { email: string; password: string };
type SignupResponse =
  | {
      user: User;
      token: string;
    }
  | ServerError;

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
      .then((r) => {
        if (r.token) {
          localStorage.setItem("token", r.token);
        }
        return r.user;
      })
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
      .then((r) => {
        if (r.token) {
          localStorage.setItem("token", r.token);
        }
        return r.user;
      })
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

type UpdateUserPayload = Partial<User>;

export const useUpdateUser = () => {
  const sendRequest = (url: string, { arg }: { arg: UpdateUserPayload }) => {
    const token = localStorage.getItem("token");
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    return fetch(`${baseUrl}/user`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(arg),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r.token) {
          localStorage.setItem("token", r.token);
        }
        return r.user;
      })
      .catch((e) => {
        throw e;
      });
  };
  const response = useSWRMutation(AUTH_PATH, sendRequest);
  const { user, error } = isErrorResponse(response.data)
    ? { user: undefined, error: response.data.message || response.data.error }
    : { user: response.data, error: response.error };
  return {
    user,
    updateUser: response.trigger,
    loading: response.isMutating,
    error,
  };
};
