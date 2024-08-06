import { axiosInstance } from "../axiosInstance";
import { endPoints } from "../endPoints";

export const getDashboardData = async () => {
   try {
     const { data } = await axiosInstance.get(
       `${endPoints.matrix.dashboard}`
     );
     return data;
   } catch (error) {
     console.error("Error occurred while fetching dashboard data:", error);
     throw error;
   }
 };