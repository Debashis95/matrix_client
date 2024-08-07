export const baseURL = "https://matrix-api-zsh3.onrender.com";

//Access to product image

export const endPoints = {
  users: {
    signup: "/user/create",
    signin: "/user/login",
    verifyEmail: '/user/verify-email'
  },
  matrix: {
    save: "/matrix/save-matrices",
    operation: "/matrix/record-operation",
    dashboard: "/matrix/dashboard",
    performance: "/matrix/user-performance",
  },
  images: {
    profileImage: '/images'
  }
};
