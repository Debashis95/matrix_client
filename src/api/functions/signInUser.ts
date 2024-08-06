import { axiosInstance } from "../axiosInstance";
import { endPoints } from "../endPoints";
import { SignUpFormData } from "../../typescript/interface/user.interface";

export const signInUser = async (input: SignUpFormData) => {
  try {
    const { data } = await axiosInstance.post(
      `${endPoints.users.signin}`,
      input
    );
    return data;
  } catch (error) {
    console.error("Error occurred while signing in:", error);
    throw error;
  }
};
