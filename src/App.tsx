import React from "react";
import TaskList from "./components/TaskList/TaskList";
import { AppStyle } from "./styles/themes/SimpleTheme";

function App() {
  return (
    <AppStyle>
      <TaskList  />
    </AppStyle>
  );
}

export default App;
