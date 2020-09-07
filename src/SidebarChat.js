import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Dance Room</h2>
        <p>THis is real time</p>
      </div>
    </div>
  );
}

export default SidebarChat;
