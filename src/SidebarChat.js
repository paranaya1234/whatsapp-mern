import React from 'react'
import { Avatar} from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat() {
    return (
        <div  className="sidebarchat">
          <Avatar />
            <div className="sidebarchat__info">
              <h2> Room name</h2>  
              <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
