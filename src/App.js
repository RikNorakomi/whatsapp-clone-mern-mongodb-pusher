import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher";

function App() {
  useEffect(() => {
    const pusher = new Pusher("a87a1c1a2aec326fcd61", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
        left off at 3:18:57
      </div>
    </div>
  );
}

export default App;
