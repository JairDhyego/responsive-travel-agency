import React from 'react'

import logo from "@/assets/logo.png";
import { Container } from './styles';
import Button from '@/components/Button';

const Footer = () => {


  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];

  return (
    <Container>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="desciption">
              You can dream, create, design, and build the most wonderful place.
            </p>
          </div>
          <ul>
            <li>
              <span> 84 992062216 </span>
            </li>
            <li>
              <span>jaiirdhyego@gmail.com</span>
            </li>
            <li>
              <span>www.youtube.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Newsletter</h2>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <Button text="Subscribe Now" />
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Designed by <a href="#">Jair Dhyego</a>
        </span>
      </div>
    </Container>
  )
}

export default Footer