"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log({ res, error });
  };
  return (
    <div className="lg:w-4/5 mx-auto h-[85vh] flex justify-center items-center">
      <div className="p-16 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">
          Login Your Account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email address</legend>
            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input border-none bg-slate-200"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="my-1 text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input
              type={`${isShowPassword ? "text": "password"}`}
              {...register("password", {
                required: "Password field is required",
              })}
              className="input border-none bg-slate-200"
              placeholder="Enter your password"
            />
            <span onClick={()=> setIsShowPassword(!isShowPassword)} className="right-2 top-5 absolute cursor-pointer">
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <p className="my-1 text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn btn-block bg-[#403F3F] text-white mt-4">
            Login
          </button>
        </form>
        <p className="text-pink-500 font-semibold text-sm mt-4 text-center">
          <span className="text-[#403F3F]">Don&#39;t Have an account? </span>{" "}
          <Link href={"/register"}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
