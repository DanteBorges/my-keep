import React from "react";
import { TASKS } from "./server/json";
import TaskList from "./components/TaskList/TaskList";
import { AppStyle } from "./styles/themes/SimpleTheme";

function App() {
  return (
    <AppStyle>
      <TaskList tasks={TASKS} />
    </AppStyle>
  );
}

export default App;
