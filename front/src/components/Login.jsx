import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

function Login() {
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* Close Button */}
        <Link to="/"
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg">Login</h3>

        {/* Email */}
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none ml-9"
            {...register("email", { required: true })}
          />
          <br />
           {errors.email && <span  className="text-sm text-red-500">This field is required</span>}
        </div>

        {/* Password */}
        <div className="mt-4 space-y-2">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-80 px-3 py-1 border rounded-md outline-none ml-2"
            {...register("password", { required: true })}
          />
          <br />
           {errors.password && <span className="text-sm text-red-500">This field is required</span>}
        </div>

        {/* Button & Link */}
        <div className="flex justify-around mt-4 items-center">
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-3 ml-9">
            Login
          </button>
          <span>
            Not registered?{" "}
            <Link
              to="/signup"
              className="underline text-blue-500 cursor-pointer"
              onClick={closeModal}
            >
              Signup
            </Link>
          </span>
        </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
