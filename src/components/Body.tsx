import "./Body.css";
import React from "react";
import BodyNav from "./BodyNav";
import Message from "./Message";

function Body() {
  return (
    <div className="body">
      <BodyNav />
      <Message />
    </div>
  );
}

export default Body;
