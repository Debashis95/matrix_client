import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveMatrices } from "../../api/functions/saveMatrix";
// import { recordOperation } from "../../api/functions/recordOperation";

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

import {jwtDecode, JwtPayload} from "jwt-decode";

const getTokenFromStorage = () => localStorage.getItem('token');

export const getUserIdFromToken = () => {
  const token = getTokenFromStorage();
  if (token) {
    const decodedToken = jwtDecode<CustomJwtPayload>(token);
    return decodedToken?.id;
  }
  return null;
};


export const useSaveMatrices = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: saveMatrices,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["matrices"] });
      console.log("Matrices saved successfully!");
    },
  });
};

// export const useRecordOperation = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: recordOperation,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["operations"] });
//       console.log("Operation recorded successfully!");
//     },
//   });
// };
