// had to convert this from an object with functions in it because typescript didn't like it
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import GlobalConfig from "../config/GlobalConfig";
import { ISignin, IJWTUser, IResponse } from "../interfaces/network";

const authService = {
  // converts standard json object to x-www-form-urlencoded format required by Spring Security
  toUrlEncoded(details: any) {
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    return formBody.join("&");
  },

  async signin(username: string, password: string): Promise<ISignin> {
    const userParams = this.toUrlEncoded({ username, password });

    try {
      const response = await axios.post<AxiosRequestConfig, IResponse>(
        GlobalConfig.server_url + "/login",
        userParams,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        }
      );

      if (response?.data?.access_token) {
        const user = this.parseJwt(response.data.access_token);

        this.storeAccessToken(response.data.access_token);
        this.storeUser(user);
        return user;
      }
      throw AxiosError;
    } catch (err: any) {
      // If we get an axios error, we can assume the server down
      if (err?.code === "ERR_NETWORK") {
        return { message: "Server error, please try again later" };
      }

      // If not, assuming it's incorrect credientials
      return { message: "Incorrect username or password" };
    }
  },

  async resetPassword(body: {
    secret: string;
    userId: string | undefined;
    newPassword: string;
  }) {
    const res = await axios.post(
      GlobalConfig.server_url + "/user/users/password/reset",
      body
      // {
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      // }
    );
    return res.data;
  },

  logout() {
    window.sessionStorage.setItem("access_token", "");
    window.sessionStorage.setItem("user", "");
  },

  storeAccessToken(accessToken: string) {
    window.sessionStorage.setItem("access_token", accessToken);
  },

  getAccessToken(): string | null {
    return window.sessionStorage.getItem("access_token");
  },

  storeUser(user: IJWTUser) {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  },

  getUser(): IJWTUser | undefined {
    const user = window.sessionStorage.getItem("user");
    if (user) return JSON.parse(user);
    return undefined;
  },

  parseJwt(token: string): IJWTUser {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  },
};

export default authService;
