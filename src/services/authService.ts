// had to convert this from an object with functions in it because typescript didn't like it
import { jwtDecode } from "jwt-decode";
import { AxiosError, AxiosRequestConfig } from "axios";
import { ISignin, IJWTUser, IResponse } from "../interfaces/network";
import apiInstance from "./apiInstance";

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

  async signin(username: string, password: string): Promise<ISignin | undefined> {
    const userParams = this.toUrlEncoded({ username, password });

    try {
      const response = await apiInstance.post<AxiosRequestConfig, IResponse>(
        "/login",
        userParams,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        }
      );

      if (response?.data?.access_token) {
        const user: ISignin | undefined = this.parseJwt(response.data.access_token);

        this.storeAccessToken(response.data.access_token);
        if(user)this.storeUser(user);
        return user;
      }
      throw AxiosError;
    } catch (err: any) {
      // If we get an axios error, we can assume the server down
      if (err?.code === "ERR_NETWORK") {
        throw new Error("Server error, please try again later");
      }

      // If not, assuming it's incorrect credientials
      throw new Error("Incorrect username or password");
    }
  },
  async forgotPassword(email: string) {
    try {
      const response = await apiInstance.get(
        `/password/forgot/${email}`
      );

      if (response.status === 200) {
        return { message: response.data };
      }

      throw AxiosError;
    } catch (err: any) {
      // If we get an axios error, we can assume the server down
      if (err?.code === "ERR_NETWORK") {
        throw new Error("Server error, please try again later");
      }
      console.warn("password reset error", err);
      throw new Error("ERROR: " + err.message);
    }
  },
  async resetPassword(body: {
    secret: string;
    userId: string | undefined;
    newPassword: string;
  }) {
    try {
      const response = await apiInstance.post(
        "/password/reset",
        body
      );

      if (response.status === 200) {
        return { message: response.data };
      }

      throw AxiosError;
    } catch (err: any) {
      // If we get an axios error, we can assume the server down
      if (err?.code === "ERR_NETWORK") {
        throw new Error("Server error, please try again later");
      }
      throw new Error("The email you entered does not exist");
    }
  },

  logout() {
    window.localStorage.setItem("access_token", "");
    window.localStorage.setItem("user", "");
  },

  storeAccessToken(accessToken: string) {
    window.localStorage.setItem("access_token", accessToken);
  },

  getAccessToken(): string | null {
    return window.localStorage.getItem("access_token");
  },

  storeUser(user: IJWTUser) {
    window.localStorage.setItem("user", JSON.stringify(user));
  },

  getUser(): IJWTUser | undefined {
    const user = window.localStorage.getItem("user");
    const token = authService.getAccessToken();
  
    if (!token || !user) {
      authService.logout();
      return undefined;
    }
  
    const isTokenValid = authService.isTokenValid(token);
  
    if (!isTokenValid) {
      authService.logout();
      return undefined;
    }
  
    return JSON.parse(user);
  },

  isTokenValid(token: string): boolean {
    const decodedToken = jwtDecode<{ exp: number }>(token);
    const expirationTimestamp = decodedToken.exp;
    const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
  
    return currentTimestamp <= expirationTimestamp;
  },

  parseJwt(token: string): IJWTUser | undefined {
    const decodedToken = jwtDecode<{ exp: number }>(token);
    const expirationTimestamp = decodedToken.exp;
    const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
  
    if (currentTimestamp > expirationTimestamp) {
      authService.logout();
      return undefined;
    }
  
    return decodedToken;
  }
};

export default authService;
