import React from 'react'
import banner from "../assets/Banner.jpg";

function Banner() {
  return (
    <>
    <div className="container flex flex-col px-4 mx-auto my-10 md:flex-row max-w-screen-2xl md:px-20">
    <div  className="order-2 w-full md:order-1 md:w-1/2 md:mt-32">
   <div className="space-y-12 ">
     <h1 className="text-4xl font-bold">Hello,welcome here to learn something<span className="text-pink-500">new everyday</span></h1>
    <p className="text-xl" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus assumenda sequi obcaecati, at tenetur! Culpa nulla dolore, enim, explicabo tempore odit voluptate soluta ut suscipit sunt obcaecati, possimus ratione?</p>
    
    <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
   </label>
   <div className="hidden validator-hint">Enter valid email address</div>

   </div>
   <button className="-mt-8 btn btn-secondary">Secondary</button>
    </div>
    <div className="order-1 w-full md:ml-20 md:mt-30 md:w-1/2" >
    <img src={banner} className="w-150 h-105" alt=""/>
    </div>
    </div>
    </>
  )
}

export default Banner
