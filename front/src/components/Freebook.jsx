import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../assets/list.json"
import Card from './Card';

function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free");
    
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    
    
  return (
    <>
    <div className="px-4 mx-auto max-w-screen-2xl md:px-20">
      <div>
        <h1 className="pb-2 text-xl font-semibold">Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dignissimos, velit officia ipsa, quod commodi voluptatum distinctio minima quam sint quaerat voluptas blanditiis harum omnis tenetur perferendis! Reprehenderit, asperiores voluptatibus.</p>
      </div>
      <div className="mt-5 mb-5">
        <Slider {...settings}>

          {filterData.map((item)=>
          (
            <Card item={item} key={item.id} />
          ))}
       
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Freebook
