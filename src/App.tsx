import React from "react";
import { TASKS } from "./server/json";
import TaskList from "./components/TaskList/TaskList";
import "./styles.css";


function App() {
  return (
    <div className="App">
     <h1>Keep-clone</h1>
     <div className="App">
      <TaskList tasks={TASKS} />
    </div>
    </div>
  );
}

export default App;
