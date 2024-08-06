import { axiosInstance } from '../axiosInstance';
import { endPoints } from '../endPoints';
import { SignUpFormData } from '../../typescript/interface/user.interface';

export const signUpUser = async (input: SignUpFormData) => {
  try {
    const { data } = await axiosInstance.post(
      `${endPoints.users.signup}`,
      input
    );
    return data;
  } catch (error) {
    console.error("Error occurred while signing up:", error);
    throw error;
  }
};
