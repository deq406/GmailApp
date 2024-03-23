import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./BodyNav.css";

import React from "react";

function BodyNav() {
  return (
    <div className="bodyNav">
      <div className="bodyNav__first">
        <div className="left">
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="right">
          <p>1 - 50 of 235</p>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="bodyNav__second">
        <div className="item1">
          <InboxIcon />
          <span>Primary</span>
        </div>
        <div className="">
          <PeopleIcon />
          <span>Social</span>
        </div>
        <div className="">
          <LocalOfferIcon />
          <span>Promotions</span>
        </div>
      </div>
    </div>
  );
}

export default BodyNav;
