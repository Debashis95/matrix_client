export interface SignUpFormData {
   first_name: string;
   last_name: string;
   email: string;
   password: string;
   profile_image?: string;
 }

 export interface SignInFormData {
  email: string;
  password: string;
}

 export interface SignUpProps {
  onSuccessfulSignUp: () => void;
}
 export interface SignInProps {
  onSuccessfulSignIn: () => void;
}

