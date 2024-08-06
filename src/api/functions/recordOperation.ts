import { axiosInstance } from "../axiosInstance";
import { endPoints } from "../endPoints";

export const recordOperation = async (input: { userId: string, operationType: string }) => {
   try {
     const { data } = await axiosInstance.post(
       `${endPoints.matrix.operation}`,
       input
     );
     return data;
   } catch (error) {
     console.error("Error occurred while recording operation:", error);
     throw error;
   }
 };