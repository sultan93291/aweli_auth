import { useState } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router";

const ForgotPass = () => {
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
    navigate("/auth/verify-otp")
    
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[35px] flex flex-col gap-y-4 h-auto bg-[#fff] border-[1px] items-center border-solid p-8 xl:p-12 shadow-lg "
    >
      <h2 className=" font-bold text-[22px] xl:text-[36px] uppercase leading-[125%]  text-[#1B1812] mb-2 custom-xl:mb-1">
        Forgot Password
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
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <button
            type="submit"
            className=" w-full rounded-[25px] text-[#1B1812] border-[1px] border-solid bg-[#99D3FF] hover:border-[#99D3FF] duration-300 ease-in-out py-2 lg:py-3 px-2 lg:px-4 font-bold hover:bg-transparent border-transparent  text-base lg:text-lg "
          >
            Log in
          </button>
         
        </div>
      </div>
    </form>
  );
}

export default ForgotPass