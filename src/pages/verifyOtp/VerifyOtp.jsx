import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [error, setError] = useState(""); // State for handling OTP errors
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const getNextInputName = currentName => {
    const fields = ["otpOne", "otpTwo", "otpThree", "otpFour"];
    const currentIndex = fields.indexOf(currentName);
    return currentIndex < fields.length - 1 ? fields[currentIndex + 1] : null;
  };

  const getPrevInputName = currentName => {
    const fields = ["otpOne", "otpTwo", "otpThree", "otpFour"];
    const currentIndex = fields.indexOf(currentName);
    return currentIndex > 0 ? fields[currentIndex - 1] : null;
  };

  const handleInputChange = (e, field) => {
    setError(""); // Clear error when user types
    const { value } = e.target;

    if (/^\d?$/.test(value)) {
      setValue(field, value);

      // Move to next field if the current field is filled
      if (value) {
        const nextInput = getNextInputName(field);
        if (nextInput) {
          document.querySelector(`input[name="${nextInput}"]`)?.focus();
        }
      }
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === "Backspace" && !getValues(field)) {
      const prevInput = getPrevInputName(field);
      if (prevInput) {
        document.querySelector(`input[name="${prevInput}"]`)?.focus();
      }
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{4}$/.test(pasteData)) {
      pasteData.split("").forEach((num, index) => {
        setValue(`otp${index + 1}`, num);
      });
      document.querySelector(`input[name="otpFour"]`)?.focus();
    }
  };

  const onSubmit = data => {
    const otpValues = Object.values(data);
    if (otpValues.some(value => value === "")) {
      setError("Please enter all four digits of the OTP.");
      return;
    }

    const otpCode = otpValues.join("");
    console.log("OTP Submitted:", otpCode);

    // Navigate to reset password page
    navigate("/auth/reset-pass");

    // Add API call or verification logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[35px] flex flex-col gap-y-4 h-auto bg-[#fff] border-[1px] items-center border-solid p-5 lg:p-8 xl:p-12 shadow-lg"
    >
      <h2 className="font-bold text-[28px] xl:text-[36px] uppercase leading-[125%] text-[#1B1812] mb-2 custom-xl:mb-1">
        Verify OTP
      </h2>

      <div className="flex flex-col gap-y-4 lg:gap-y-6">
        <div className="flex flex-row gap-x-3 xl:gap-x-5 justify-center w-full items-center">
          {["otpOne", "otpTwo", "otpThree", "otpFour"].map(name => (
            <Controller
              key={name}
              name={name}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  maxLength={1}
                  className="h-[40px] xl:h-[60px] w-[50px] xl:w-[70px] bg-[#E0E0E0] outline-none rounded-[8px] text-center text-base xl:text-xl font-semibold"
                  onChange={e => handleInputChange(e, name)}
                  onKeyDown={e => handleKeyDown(e, name)}
                  onPaste={handlePaste}
                />
              )}
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex flex-col gap-y-3">
          <button
            type="submit"
            className="w-full rounded-[25px] text-[#1B1812] border-[1px] border-solid bg-[#99D3FF] hover:border-[#99D3FF] duration-300 ease-in-out py-2 lg:py-3 px-2 lg:px-4 font-bold hover:bg-transparent border-transparent text-base lg:text-lg"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </form>
  );
};

export default VerifyOtp;
