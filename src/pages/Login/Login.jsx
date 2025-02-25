import React from 'react'
import  { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";

const Login = () => {
   const [isPass, setIspass] = useState(true);
   const [isConfirmPass, setIsConfirmpass] = useState(true);
   const [isChecked, setisChecked] = useState();
   const handleCheck = e => {
     setisChecked(e.target.checked);
   };
   const navigate = useNavigate();
   const {
     register,
     handleSubmit,
     formState: { errors },
     clearErrors,
     watch, // Watch for password value for confirmPassword validation
   } = useForm();

   const onSubmit = data => {
     console.log(data);
     
   };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[35px] flex flex-col gap-y-4 h-auto bg-[#fff] border-[1px] items-center border-solid p-8 xl:p-12 shadow-lg "
    >
      <h2 className=" font-bold text-[28px] xl:text-[42px] uppercase leading-[125%]  text-[#1B1812] mb-2 custom-xl:mb-1">
        Log In
      </h2>
      <div className="flex flex-col gap-y-4 lg:gap-y-6">
        <div className="flex flex-col gap-y-2  ">
          <div className="flex flex-col gap-y-3 lg:gap-y-6  ">
            {/* Email Input */}
            <div className="flex  items-start flex-col gap-y-2">
              <label
                htmlFor="email"
                className={`common-form-heading ${
                  errors.email ? "text-red-500" : ""
                }`}
              >
                Email
              </label>
              <input
                placeholder={
                  errors.email ? errors.email.message : "Enter your email"
                }
                id="email"
                type="email"
                className={`form-input ${
                  errors.email ? "border-red-500 placeholder-red-500" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                    message: "Invalid email address",
                  },
                  onChange: () => clearErrors("email"),
                })}
              />
            </div>
            {/* Password Input */}
            <div className="flex flex-col w-full relative items-start gap-y-2">
              <label
                htmlFor="password"
                className={`common-form-heading ${
                  errors.password ? "text-red-500" : ""
                }`}
              >
                Set a Password
              </label>
              <div className="relative w-full ">
                <input
                  placeholder={
                    errors.password
                      ? errors.password.message
                      : "Enter your password"
                  }
                  type={isPass ? "password" : "text"}
                  className={`form-input  ${
                    errors.password ? "border-red-500 placeholder-red-500" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {isPass ? (
                  <FaEyeSlash
                    onClick={() => setIspass(!isPass)}
                    className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  />
                ) : (
                  <FaEye
                    onClick={() => setIspass(!isPass)}
                    className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end cursor-pointer ">
            <NavLink
              to={"/auth/forgot-pass"}
              className=" max-w-[250px] md:max-w-[300px] lg:max-w-[340px] underline text-base  text-[#99D3FF] cursor-pointer  "
            >
              Forgot password
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <button
            type="submit"
            className=" w-full rounded-[25px] text-[#1B1812] border-[1px] border-solid bg-[#99D3FF] hover:border-[#99D3FF] duration-300 ease-in-out py-2 lg:py-3 px-2 lg:px-4 font-bold hover:bg-transparent border-transparent  text-base lg:text-lg "
          >
            Log in
          </button>
          <div className="flex justify-center w-full">
            <p className=" text-base lg:text-lg  font-normal text-center  ">
              Already have a account ?{" "}
              <NavLink
                to={"/auth/signup"}
                className={"text-[#99D3FF] font-semibold "}
              >
                Signup
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login


          



          
          

           