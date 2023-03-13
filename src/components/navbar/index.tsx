import * as C from "./styles"
import logo from "@/assets/logo.png"
import { BsPerson } from "react-icons/bs"
import { IoSearchOutline } from "react-icons/io5"

const Navbar = () => {
  return (
    <C.Container state={false}>
      <div className='brand'>
        <img src={logo} alt="" />
      </div>
      <div className='toggle'></div>
      <div className="links">
        <ul>
          <li><a href="#service">Service</a></li>
          <li><a href="#destination">destination</a></li>
          <li><a href="#offer">offer</a></li>
          <li><a href="#tour">tour</a></li>
          <li><a href="#blog">blog</a></li>
        </ul>
      </div>
      <div className="account-info">
        <div className="account">
          <span>
            <BsPerson />
          </span>
          <span> My Account </span>
        </div>
        <div className="search">
          <IoSearchOutline />
        </div>
      </div>
    </C.Container>
  )
}

export default Navbar