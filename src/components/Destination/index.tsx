import React from 'react'
import * as C from "./styles"

import cuba from "@/assets/cuba.png";
import paris from "@/assets/paris.png";
import japan from "@/assets/japan.png";
import Button from '../Button';

const Destination = () => {


  const data = [
    {
      name: "Cuba City",
      image: cuba,
    },
    {
      name: "Paris",
      image: paris,
    },
    {
      name: "Japan",
      image: japan,
    },
  ];

  return (
    <C.Container id="destination">
      <div className='info'>
        <h2>Top <span>Destination</span> in the world</h2>
        <p>It is a long established fact that a reader will be distracted bt the readable content of a page when looking at its layout from it</p>
        <Button text="Discover more" />
      </div>
      <div className="destinations">
        {data.map(({ name, image }) => (
          <div className='destination' key={name}>
            <div className='image'>
              <img src={image} alt="destination" />
            </div>
            <div className="name">
              <h3>{name}</h3>
            </div>
          </div>
        ))}
      </div>

    </C.Container>
  )
}

export default Destination