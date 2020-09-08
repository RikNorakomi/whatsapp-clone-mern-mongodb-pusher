import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      console.log("setting messages: " + response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("a87a1c1a2aec326fcd61", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages) => {
      // Alert creates a popup in the browser window
      // alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages]);
    });

    // Cleanup function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

    // messages is the dependency for this useEffect. Whenever a new messages is coming in the above
    // code is being run again creating a new listener (channel.bind) which also needs to be unregistered
    // in the clean up function that is being returned to not flood the app with listeners that all perform the same function
  }, [messages]);

  console.log("messages: " + messages);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
