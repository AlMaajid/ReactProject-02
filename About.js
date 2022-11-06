import React from "react";

export default function About(props) {
  return (
    <div className="about-container">
      <h3 className="about-title" id="about--title">{props.title}</h3>
      <p className="about-content"
      >{props.content}</p>
    </div>
  )
}