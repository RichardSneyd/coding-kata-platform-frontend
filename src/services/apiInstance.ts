import axios from "axios";
import authService from "./authService";
import GlobalConfig from "../config/GlobalConfig";

// Create a custom Axios instance
const apiInstance = axios.create({
  baseURL: GlobalConfig.server_url,
});

// Add an interceptor to handle the response status code
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Clear stored user information and redirect to login page
      authService.logout();
    }
    return Promise.reject(error);
  }
);

export default apiInstance;