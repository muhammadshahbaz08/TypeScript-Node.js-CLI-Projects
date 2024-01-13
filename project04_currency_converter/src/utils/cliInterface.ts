import { apiService } from "../services/apiService.js";

export const cliInterface = async () => {
  console.log(await apiService());
};
