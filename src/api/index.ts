import axios from "axios";

const Axios = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://authentication-apii.herokuapp.com/",
});

Axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");

export function getInfo() {
  return Axios.get("/api/user");
}

export function googleLogin(access_token: string) {
  return Axios.post("/api/user/login/google", { access_token });
}
export function facebookLogin(access_token: string) {
  return Axios.post("/api/user/login/facebook", { access_token });
}
export function githubLogin(code: string) {
  return Axios.post("/api/user/login/github", { code });
}
export function localLogin(email: string, password: string) {
  return Axios.post("/api/user/login/local", { email, password });
}
export function localRegister(email: string, password: string) {
  return Axios.post("/api/user/register", { email, password });
}
export function updateInfo(data: FormData) {
  return Axios.post("/api/user/update", data);
}
