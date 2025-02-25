import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex  h-[100vh]  flex-col items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
