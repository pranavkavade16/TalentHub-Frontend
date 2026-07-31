import axiosInstance from "../../services/axiosInstance";

const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);

  return response.data;
};

const register = async (registerData) => {
  const response = await axiosInstance.post("/auth/register", registerData);

  return response.data;
};

const getCurrentUser = async () => {
  const response = await axiosInstance.get("/auth/me");

  return response.data;
};

const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");

  return response.data;
};

const authService = {
  login,
  register,
  getCurrentUser,
  logout,
};

export default authService;
