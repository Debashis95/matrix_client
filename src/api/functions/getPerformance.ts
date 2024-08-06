import { axiosInstance } from "../axiosInstance";
import { endPoints } from "../endPoints";

export const getPerformance = async (userId: string) => {
   try {
     const { data } = await axiosInstance.get(
       `${endPoints.matrix.performance}/${userId}`
     );
     return data;
   } catch (error) {
     console.error("Error occurred while fetching user performance data:", error);
     throw error;
   }
 };
