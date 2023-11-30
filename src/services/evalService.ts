import { AxiosError } from "axios";
import { IEvaluate } from "../interfaces/eval";
import apiInstance from "./apiInstance";

const EvalService = {
  evaluate: async (
    { userId, problemId, code, lang }: IEvaluate,
    token: string
  ) => {
    try {
      const response = await apiInstance.post(
        "/user/eval/" + problemId,
        {
          userId,
          code,
          lang,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        console.log(JSON.stringify(response.data));
        return response.data;
      }
      throw AxiosError;
    } catch (err: any) {
      // If we get an axios error, we can assume the server down
      if (err?.code === "ERR_NETWORK") {
        throw new Error("Server error, please try again later");
      }
      if (typeof err.response.data === "string") {
        throw new Error(err.response.data);
      }
      throw new Error("Could not evaluate solution");
    }
  },
  test: async (
    { userId, problemId, code, lang }: IEvaluate,
    token: string
  ) => {
    try {
      const response = await apiInstance.post(
        "/user/eval/test/" + problemId,
        {
          userId,
          code,
          lang,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      }
      throw AxiosError;
    } catch (err: any) {
      // If we get an axios error, we can assume the server down
      if (err?.code === "ERR_NETWORK") {
        throw new Error("Server error, please try again later");
      }
      if (typeof err.response.data === "string") {
        throw new Error(err.response.data);
      }
      throw new Error("Could not evaluate solution");
    }
  }
};

export default EvalService;
