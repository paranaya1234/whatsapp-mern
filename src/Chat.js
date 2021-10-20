import React from 'react'
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
            <Avatar />
         <div className="chat_headerinfo">
            <h3> Room name</h3> 
             <p>Last seen at..</p>
         </div>
         <div className="chat_headerRight">
              <IconButton>
                  <SearchOutlined/>
              </IconButton>
              <IconButton>
                  <AttachFile/>
              </IconButton>
              <IconButton>
                  <MoreVert/>
              </IconButton>
            </div>
            </div>

            <div className="chat_body">
              <p className="chat_message">
               <span className="chat_name">sonny</span>

                  This is a message

                  <span className="chat_timestamp"> {new Date().toUTCString()}
                  </span>
              </p>
              <p className="chat_message chat_reciever ">
               <span className="chat_name">sonny</span>

                  This is a message

                  <span className="chat_timestamp"> {new Date().toUTCString()}
                  </span>
              </p>
              <p className="chat_message">
               <span className="chat_name">sonny</span>

                  This is a message

                  <span className="chat_timestamp"> {new Date().toUTCString()}
                  </span>
              </p>
            </div>
            <div className="chat_footer">
                <InsertEmoticon/>
                <form>
                    <input placeholder="Type amessage" type="text"/>
                    <button  type="submit">
                        Send a message
                        </button>
                </form>
                <Mic/>
            </div>
     </div>
    )
}

export default Chat
