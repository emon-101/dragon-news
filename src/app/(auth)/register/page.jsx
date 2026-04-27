"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";


const RegisterPage = () => {
    
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleRegisterFunc = async(data) => {
        const {name, email, photo, password} = data;

        const {data: res, error} = await authClient.signUp.email({
            name: name,
            email: email,
            image: photo,
            password: password,
            callbackURL: "/"
        });
        
        console.log({res, error});
        if(error) {
            alert(error.message);
        }
        if(res) {
            alert("SignUp Successful");
        }
    }
  return (
    <div className="lg:w-4/5 mx-auto h-[85vh] flex justify-center items-center">
      <div className="p-16 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-4">Register Your Account</h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Your Name</legend>
            <input type="text" {...register("name", {required: "Name field is required"})} className="input border-none bg-slate-200" placeholder="Enter your name" />
            {errors.name && <p className="my-1 text-red-500">{errors.name.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Photo URL</legend>
            <input type="text" {...register("photo", {required: "Photo field is required"})} className="input border-none bg-slate-200" placeholder="Enter your photo url" />
            {errors.photo && <p className="my-1 text-red-500">{errors.photo.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Email address</legend>
            <input type="email" {...register("email", {required: "Email field is required"})} className="input border-none bg-slate-200" placeholder="Enter your email address" />
            {errors.email && <p className="my-1 text-red-500">{errors.email.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg">Password</legend>
            <input type="password" {...register("password", {required: "Password field is required"})} className="input border-none bg-slate-200" placeholder="Enter your password" />
            {errors.password && <p className="my-1 text-red-500">{errors.password.message}</p>}
          </fieldset>
          <button className="btn btn-block bg-[#403F3F] text-white mt-4">Register</button>
        </form>
        
      </div>
    </div>
  );
};

export default RegisterPage;
