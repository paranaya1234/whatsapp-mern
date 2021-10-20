import React from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
//import Pusher from "pusher-js";
//import  { useEffect ,useState } from "react";
//import axios from './axios';
//import channel from 'axios';

function App() {
  
 /* const [messages, setMessages] = useState([]);

  useEffect(() =>{
    axios.get('/messages/sync').then((response) => {
      
      setMessages(response.data);
    })

  },[]);*/

 /* useEffect(() => {
    const pusher = new Pusher('0f80d716db0127cf4f8d', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      alert(JSON.stringify(newMessages));
      setMessages([...messages,newMessages]);

    });
  }, []);

 (() => {

  channel.unbind_all();
  channel.unsubscribe();
  
 }, [messages])*/

 
  /*console.log(messages);*/


  return (
    <div className="app">
      <div className="app_body">
      <Sidebar />
       <Chat />
      </div>
       

      
    </div>
  );
}

export default App;
