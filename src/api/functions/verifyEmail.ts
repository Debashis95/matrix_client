import { axiosInstance } from "../axiosInstance";
import { endPoints } from "../endPoints";

export const verifyEmail = async (token: string) => {
  try {
    const { data } = await axiosInstance.get(`${endPoints.users.verifyEmail}/${token}`);
    return data;
  } catch (error) {
    console.error("Error occurred while verifying email:", error);
    throw error;
  }
};
