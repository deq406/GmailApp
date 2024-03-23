import React from "react";
import "./Message.css";
import SingleMessage from "./SingleMessage";

function Message() {
  const generator = [];

  for (let i = 0; i < 50; i++) {
    generator.push(<SingleMessage />);
  }
  console.log(generator);
  return <div>{generator}</div>;
}

export default Message;
