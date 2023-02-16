import { ServerError } from "./types";

export const isErrorResponse = <T extends {}>(
  response: T | ServerError | undefined
): response is ServerError => {
  return response ? response.hasOwnProperty("statusCode") : false;
};
