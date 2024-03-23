import { SvgIconProps } from "@mui/material";
import "./SidebarOption.css";
import React from "react";

interface IProps {
  icon: React.ReactElement<SvgIconProps>;
  title: string;
  number?: number;
  selected?: boolean;
}

const SidebarOption: React.FC<IProps> = ({ icon, title, number, selected }) => {
  return (
    <div className={`sidebarOption ${selected && "sidebar--active"}`}>
      {icon}
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};
export default SidebarOption;
