import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signUpUser } from "../../api/functions/signUpUser";
import { signInUser } from "../../api/functions/signInUser";
import { getDashboardData } from "../../api/functions/getDashboard";
import { useNavigate } from "react-router-dom";
import { getPerformance } from "../../api/functions/getPerformance";
import { verifyEmail } from "../../api/functions/verifyEmail";

export const useCreateNewUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn:  (formData: FormData) => signUpUser(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log("success !");
      navigate("/signin");
    },
  });
};
export const useLogUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      localStorage.setItem("token", data.token);
      console.log("Login successful!");
      navigate("/");
    },
  });
};

export const useDashboardData = () => {
  // const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["dashboardData"],
    queryFn: getDashboardData,
  });
};

export const useUserPerformance = (userId: string) => {
  return useQuery({
    queryKey: ["userPerformance", userId],
    queryFn: () => getPerformance(userId),
    enabled: !!userId,
  });
};

export const useEmailVerification = (token: string) => {
  return useQuery({
    queryKey: ["emailVerification", token],
    queryFn: () => verifyEmail(token),
    enabled: !!token,
  });
};
