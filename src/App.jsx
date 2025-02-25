import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink } from "react-router";

const allRoutes = [
  { name: "Sign Up", link: "/auth/signup" },
  { name: "Log In", link: "/auth/login" },
  { name: "Verify Otp", link: "/auth/verify-otp" },
  { name: "Forgot Pass", link: "/auth/forgot-pass" },
  { name: "Reset Pass", link: "/auth/reset-pass" },
];

function App() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <ul className=" flex flex-col  gap-y-4  p-10   ">
        {allRoutes.map((route, index) => {
          return (
            <NavLink
              className={
                "bg-white rounded-[100px] text-base border border-[#99D3FF] duration-300 ease-in-out py-4 px-8 custom-xl:py-[10px] custom-xl:px-5 max-md:py-2 max-md:px-4 font-bold hover:bg-theme-color"
              }
              to={route.link}
              key={index}
            >
              {route.name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
