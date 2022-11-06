import React from "react";

export default function Footer(props) {
  return (
    <div className='footer-container'>
      <a href="#"><i className="fa-brands fa-twitter brands"></i></a>
      <a href="#"><i className="fa-brands fa-facebook brands"></i></a>
      <a href={props.insta} target="_blank"><i className="fa-brands fa-instagram brands"></i></a>
      <a href={props.github} target="_blank"><i className="fa-brands fa-github brands"></i></a>
    </div >
  )
}