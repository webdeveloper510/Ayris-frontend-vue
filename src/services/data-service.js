import apiClient from "@/http-common";
// import authHeader from "./auth-header";

class DataService {
  getHome() {
    return apiClient.get("api/v1/machine/").then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
  getProfile() {
    return apiClient.get("api/v1/profile/").then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
  getAllCategories(catId) {
    console.warn(catId);
    let url = "api/v1/categories/";
    if (catId) {
      url += catId;
    }
    return apiClient.get(url).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
  getBuild() {
    return apiClient.get("api/v1/builds/").then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
}

export default new DataService();
