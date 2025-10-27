import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'
import { Link } from 'react-router-dom'

function Course() {
  const[book,setBook]=useState([]);
  useEffect(()=>
  {
    const getBook=async()=>
    {
      try {
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[])
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 item-center justify-center text-center">
            <h1 className="text-2xl">We're delighted to have you{" "} <span className="text-pink-500">Here! :)</span></h1>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, voluptatum! Deleniti repellat esse tempora voluptates rem, sequi explicabo temporibus fugit commodi! Praesentium tempore amet in labore, dignissimos culpa aliquam? Quisquam.</p>
            <Link to="/"><button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button></Link>
        </div>
        <div className="mt-12 mb-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-5 place-items-center ">
           { book.map((item)=>(<Card key={item.id} item={item}/>))}
        </div>
    </div>
    </>
  )
}

export default Course
