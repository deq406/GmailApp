import React from "react";
import "./SingleMessage.css";
import { IconButton } from "@mui/material";
import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function SingleMessage() {
  return (
    <div className="single__message">
      <IconButton className="one">
        <Checkbox />
      </IconButton>
      <IconButton className="two">
        <StarOutlineIcon />
      </IconButton>
      <IconButton className="three">
        <DoubleArrowIcon />
      </IconButton>
      <h3 className="four">sammy@gmail.com</h3>
      <div className="seven" />
      <p className="main five">
        <strong>Facebook Registration</strong> Complete your registration...
      </p>
      <strong className="six">Mon, 21 Feb 2022 20:38:25 GMT</strong>
    </div>
  );
}

export default SingleMessage;
