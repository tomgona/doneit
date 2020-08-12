import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://192.168.43.51:9000/api",
});

export default apiClient;
