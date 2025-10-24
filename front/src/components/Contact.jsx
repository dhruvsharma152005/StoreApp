import React from 'react'
import Login from './Login';
import { useForm } from "react-hook-form"
function Contact() {
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
             

            <h3 className="font-bold text-lg">Contact Us</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
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
              <label>Message</label>
              <textarea
                
                placeholder="Type your message"
                className="w-80 px-3 py-1 border rounded-md outline-none ml-2"
                
              />
              <br />
              {errors.message && <span  className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* Buttons */}
            <div className="flex justify-around mt-4 items-center">
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 mt-3 ml-3"
              >
                Submit
              </button>

              
              </div>
            
          </form>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Contact
