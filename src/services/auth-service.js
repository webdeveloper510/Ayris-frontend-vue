import apiClient from "@/http-common";

class AuthService {
  login(user) {
    // if(user & user.email && user.password)
    return apiClient
      .post("api/login/", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.access);
        if (response.data.data.access) {
          localStorage.setItem("conf", JSON.stringify(response.data.data));
          console.log(localStorage);
        }

        return response.data;
      });
  }

  logout() {
    return apiClient.post("logout/", {}).then((response) => {
      console.log(response);
      localStorage.getItem("conf");
      localStorage.getItem("user");
      localStorage.getItem("machine");
      localStorage.getItem("auth");
      localStorage.removeItem("conf");
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      localStorage.removeItem("machine");
      // utils.deleteAllCookies();
    });
  }

  register(user) {
    return apiClient
      .post("api/register/", {
        username: user.username,
        email: user.email,
        password: user.password,
        password2: user.password2,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        return response;
      });
  }
}

export default new AuthService();
