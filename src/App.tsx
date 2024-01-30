import React from "react";
import TaskList from "./components/TaskList/TaskList";
import { AppStyle } from "./styles/themes/SimpleTheme";
import { TASKS } from "./server/db";

function App() {
  return (
    <AppStyle>
      <TaskList tasks={TASKS} />
    </AppStyle>
  );
}

export default App;
