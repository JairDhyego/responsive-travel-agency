import React from 'react'
import * as C from "./styles"

import service1 from "@/assets/service1.png";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import service4 from "@/assets/service4.png";


const Services = () => {

  const data = [
    {
      image: service1,
      title: "Choose Destination",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service2,
      title: "Explore the Place",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service3,
      title: "Start Your Journey",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service4,
      title: "Let's Enjoy",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
  ];

  return (
    <C.Container id="services">
      <div className="services">
        {data.map(({ image, title, description }) => (

          <div className="service" key={title} >
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

    </C.Container>
  )
}

export default Services