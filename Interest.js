import React from "react";

export default function Interest(props) {
  return (
    <div className="interest-container">
      <h3 className="interest-title">{props.title}</h3>
      <p className="interest-content">{props.content}</p>
    </div>
  )
}