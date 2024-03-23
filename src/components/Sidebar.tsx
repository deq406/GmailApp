import { Button, IconButton } from "@mui/material";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        icon={<InboxIcon />}
        title="Inbox"
        selected={true}
        number={235}
      />
      <SidebarOption icon={<StarIcon />} title="Starred" number={5} />
      <SidebarOption icon={<AccessTimeIcon />} title="Snoozed" number={5} />
      <SidebarOption
        icon={<LabelImportantIcon />}
        title="Important"
        number={5}
      />
      <SidebarOption icon={<NearMeIcon />} title="Sent" number={5} />
      <SidebarOption icon={<NoteIcon />} title="Drafts" number={5} />
      <SidebarOption icon={<ExpandMoreIcon />} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
