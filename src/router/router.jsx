import { createBrowserRouter , Navigate } from "react-router-dom";
import VerifyOtp from "../pages/verifyOtp/VerifyOtp";
import Signup from "../pages/signup/signup";
import Login from "../pages/login/login";
import ForgotPass from "../pages/forgotPass/forgotPass";
import ResetPass from "../pages/resetPass/resetPass";
import App from "../App";
import AuthLayout from "../components/AuthLayout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="signup" replace />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-pass",
        element: <ForgotPass />,
      },
      {
        path: "reset-pass",
        element: <ResetPass />,
      },
    ],
  },
]);

export default router;
