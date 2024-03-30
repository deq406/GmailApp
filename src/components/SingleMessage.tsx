import "./SingleMessage.css";
import { IconButton } from "@mui/material";
import { Checkbox } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {Link} from "react-router-dom";

interface SingleMessageProps {
    name: any;
    id: any;
    message: any;
    data: any
}

function SingleMessage(props: SingleMessageProps) {

    console.log(props)
  return (
    <div className="single__message" key={props.id}>
      <IconButton className="one">
        <Checkbox />
      </IconButton>
      <IconButton className="two">
        <StarOutlineIcon />
      </IconButton>
      <Link to={`/message/${props.id}`}>
          <IconButton className="three">
            <DoubleArrowIcon />
          </IconButton>
      </Link>
      <h3 className="four">sammy@gmail.com</h3>
      <div className="seven" />
      <p className="main five">
        <strong>{props.name}</strong> {props.message}
      </p>
      <strong className="six">Mon, 21 Feb 2022 20:38:25 GMT</strong>
    </div>
  );
}

export default SingleMessage;
