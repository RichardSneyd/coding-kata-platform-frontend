import axios, { AxiosError } from "axios";
import GlobalConfig from "../config/GlobalConfig";
import { ISolution } from "../interfaces/solutions";

const solutionService = {
  getPage: async (token: string, page: number = 0, size: number = 10) => {
    const url = `${GlobalConfig.server_url}/admin/solutions?page=${page}&size=${size}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;  // This will return the entire data object now
},

getPageContent: async (token: string, page: number, size: number) => {
    const response = await solutionService.getPage(token, page, size);
    return response.content;
},

getAll: async (token: string, callback: Function) => {
    let page = 0;
    const size = 5;  // or whatever default size you prefer
    let allSolutions: ISolution[] = [];
    let isLastPage = false;

    while (!isLastPage) {
      try {
        const response = await solutionService.getPage(token, page, size);
        const solutions = response.content;

        if (response.last) {
          isLastPage = true;
        }

        allSolutions = [...allSolutions, ...solutions];

        // Callback to update the state or any other action you'd like to take
        callback && callback(allSolutions);

        page++;
      } catch (error) {
        console.error('Error fetching page:', error);
        isLastPage = true;  // terminate loop if there's an error
      }
    }
    return allSolutions;
},


  getById: async (token: string, id: string): Promise<ISolution> => {
    const res = await axios.get(
      `${GlobalConfig.server_url}/user/problems/solutions/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res.data;
  },
  getAllForUser: async (token: string, id: string): Promise<ISolution> => {
    const res = await axios.get(
      `${GlobalConfig.server_url}/admin/solutions/user/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res.data;
  },
  getAllForProblem: async (token: string, id: string): Promise<ISolution> => {
    const res = await axios.get(
      `${GlobalConfig.server_url}/admin/solutions/problem/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return res.data;
  },
  delete: async (token: string, id: string) => {
    try {
      const response = await axios.delete(
        `${GlobalConfig.server_url}/admin/solutions/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        return { message: "Problem deleted" };
      }
      throw AxiosError;
    } catch (err: any) {
      // If we get an axios error, we can assume the server down
      if (err?.code === "ERR_NETWORK") {
        throw new Error("Server error, please try again later");
      }
      throw new Error("Could not delete Solution");
    }
  },
};

export default solutionService;
