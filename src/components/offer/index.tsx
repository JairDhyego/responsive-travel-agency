import * as C from "./styles"

import lighthouse from "@/assets/lighthouse.png";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";

export const Offer = () => {

  const data = [
    {
      text: "Best Travel Guide Always for your Services",
      icon: <BsPerson />,
      color: "red",
    },
    {
      text: "World Class Services Provided For You",
      icon: <BiWorld />,
      color: "green",
    },
    {
      text: "24/7 Strong Customer Support",
      icon: <BsHeadphones />,
      color: "yellow",
    },
  ];

  return (
    <C.Container className='image' id="offer">
      <div className="image">
        <img src={lighthouse} alt="lighthouse" />
      </div>
      <div className="content">
        <div className="title">
          <h1>We are Offering in Total 793 Tours Across the World</h1>
        </div>
        <ul className="list">
          {data.map(({ text, icon, color }) => (
            <li key={text}>
              <div className={`icon ${color}`}>{icon}</div>
              <div className="text">
                <h3>{text}</h3>
              </div>
            </li>
          )
          )}
        </ul>
      </div>
    </C.Container>
  )
}
