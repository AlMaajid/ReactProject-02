import React from "react";

export default function Info(props) {
  return (
    <div>
      <img src={props.img} className="lala-image" />
      <h1 className="lala-name">{props.name}</h1>
      <p className="lala-role">{props.role}</p>
      <a href='#' className="lala-mail">{props.mail}</a>
      <div className="button-container">
        <button className="mail-btn">
          <i className="fa-solid fa-envelope"></i>
          <a href={props.mailto}>Email</a>
        </button>
        <button className="role-btn">
          <i className="fa-brands fa-linkedin"></i>
          <a href={props.linkedin} target="_blank">LinkedIn</a>
        </button>
      </div>
    </div>
  )
}