import React, { useState } from 'react'
import hero from "@/assets/hero.png"
import * as C from "./styles"
import Button from '@/components/Button'


//type ElementEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
//  React.ChangeEvent<HTMLInputElement>

const Home = () => {

  const [value, setValue] = useState<string>("$5000 - $10000")


  return (
    <C.Container>
      <div className="background">
        <img src={hero} alt="Hero" />
      </div>
      <div className="content">
        <div className="info">
          <h1>It's Time To</h1>
          <h1>Explore The World</h1>
          <Button text="Plan Your Trip" />
        </div>
        <div className="planner">
          <form>
            <div className="row">
              <label>Destinations</label>
              <select>
                <option>Lagoa do Carcara</option>
                <option>Pipa Beach</option>
              </select>
            </div>
            <div className="row">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="row">
              <label>Price Range</label>
              <input
                type="text"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              />
            </div>
            <div className="row">
              <Button text="Discover More" />
            </div>
          </form>
        </div>
      </div>
    </C.Container>
  );
}

export default Home