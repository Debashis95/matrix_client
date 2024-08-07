import { axiosInstance } from '../axiosInstance';
import { endPoints } from '../endPoints';
// import { SignUpFormData } from '../../typescript/interface/user.interface';

export const signUpUser = async (formData: FormData) => {
  try {
    const { data } = await axiosInstance.post(
      `${endPoints.users.signup}`,
      formData
    );
    return data;
  } catch (error) {
    console.error("Error occurred while signing up:", error);
    throw error;
  }
};
