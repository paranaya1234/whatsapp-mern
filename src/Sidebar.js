import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar,IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
function Sidebar() {
    return (
        <div class="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://lh3.googleusercontent.com/-Ji8yAPUCOgk/W3aG5ZJZxAI/AAAAAAAAAS0/CdsSFqnJjs84o3fHl0M5yjw5S7IdKfOJwCEwYBhgLKtQDABHVOhzJpsJfab36Nsc9NIKivR2c7WTGh6fM5FqzM1RsspzhkYh7JxGVdScdUA2ohj_H8FP3op9O2K2ayH9p2tTWuF4_UdLBhffzJSUfMcaIqnQtG_eeFXCgUTEXbjP05qPKZ2jH46OS37JA_7N8r0HQbp8ZNAgaaTFu7hgaQlpYc0gKjvLdREEKwAccbQQuIYj7NCRtUUI3IRwSX3R0s93vUjYHALVmZ6Xfm5Kt5Fj1WvTecTRuutO4BPu02BSbPb9nfA2U9R1qo4RXp1WuEG52unUO0h3NbXDQMkXq8Z23vACQWUjfJS2d6WifJPYSxzLCsvkYtuNi1GmKPyXQrax2CuT22hn5-tBGkrZlCecDNNFevJfoEM72hg0ydUEn4lG_Bnukj2ACQ-DfRceVIkDVK3m1h9esFFx5jnu5yI81Rz3QAijixdvNMDA6tKGb6mPHcNYiGJRofMnrny_XJpbdMVRiYPH9CckxiS9KuCHPjZZ_u_0E-2CRTgwM9gP8Nv8M_6GoDT2p6SCIVN0zh6cEuV2fmPmr8Gd-zU8n91_GJSgjcH8Qf-GjkYiY0AjZ2pKRiPAef4b8YOqZidqFNT4_Sm-yJHC2U4nhU4jif-hJxbzEMKeqiIoG/w140-h140-p/96567d18-45ee-46d7-a23f-617e99e8ec2e" />
            <div className="sidebar_headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
            <IconButton>
            <MoreVerIcon />
            </IconButton>
            
            
            </div>

        </div>

        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
              <SearchOutlined  />
              <input placeholder="Search or start new chat" type="text"/>
            </div>
             </div>
             <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        
        </div>
    )
}

export default Sidebar
