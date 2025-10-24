import React from 'react'
function Card({ item }) {
  return (
    <div className="bg-base-100 w-[90%] md:w-[80%] lg:w-[85%] shadow-md rounded-lg hover:scale-105 duration-200">
      <figure className="flex justify-center items-center p-4">
        <img
          src={item.image}
          alt={item.name}
          className="rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{item.price}</div>
          <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
