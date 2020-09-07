import React from "react";
import "./Chat.css";
import { IconButton, Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  SettingsInputAntenna,
  Mic,
} from "@material-ui/icons";
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Rik</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Rik</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Rik</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      {/* Chat footer */}
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            onChange={(e) => SettingsInputAntenna(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">Send a message</button>
          <MicIcon />
        </form>
      </div>
    </div>
  );
}

export default Chat;
