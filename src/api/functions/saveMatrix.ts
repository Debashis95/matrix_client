import { Matrix } from "../../utils/matrixOperations";
import { axiosInstance } from "../axiosInstance";
import { endPoints } from "../endPoints";


export const saveMatrices = async (input: { matrixA: Matrix, matrixB: Matrix, operation: string, result: Matrix, userId: string }) => {
  try {
    const { data } = await axiosInstance.post(
      `${endPoints.matrix.save}`,
      input
    );
    return data;
  } catch (error) {
    console.error("Error occurred while saving matrices:", error);
    throw error;
  }
};



