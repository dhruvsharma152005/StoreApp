import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"

function Signup() {
  const openLoginModal = () => {
    document.getElementById("my_modal_3").showModal();
  };
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  

  return (
    <>
    
    <div className="flex h-screen items-center justify-center ">
      <div className="w-[400px] border-[2px] p-5 shadow-md rounded-md relative">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">           
             <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              X
            </Link>
            {/* Close button */}

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none ml-2"
                {...register("Name", { required: true })}
                
              />
              <br />
               {errors.name && <span  className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none ml-2"
                {...register("Name", { required: true })}
              />
              <br />
               {errors.email && <span  className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none ml-2"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span  className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-4 items-center">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-3 ml-3"
              >
                Signup
              </button>

              {/* 👇 Replace <p> with <div> to hold other components */}
              <div className="text-xl">
                Have an account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={openLoginModal}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Place modal outside of <form> */}
      <Login />
    </div>
    </>
  );
}

export default Signup;
