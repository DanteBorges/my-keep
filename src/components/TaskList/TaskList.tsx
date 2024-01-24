import React from "react";

interface TaskListProps {
  tasks: Array<{
    id: number;
    name: string;
    status: string;
    time: string;
    days: string;
    done?: boolean;
    newOrder?: boolean;
  }>;
}
class TaskList extends React.Component<TaskListProps> {
  state = {
    tasks: this.props.tasks || [],
  };

  componentDidMount() {
    const { tasks } = this.props;
    this.setState({
      tasks: tasks || [],
    });
  }

  onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };

  onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove("dragged");
  };

  onDragEnter = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  onDragLeave = (evt: React.DragEvent<HTMLDivElement>) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;

    if (!newTarget || newTarget === currentTarget) return;

    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };

  onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  onDrop = (
    evt: React.DragEvent<HTMLDivElement>,
    value: boolean,
    status: string
  ) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let tasks = this.state.tasks;
    console.log("data", data, status);
    let updated = tasks.map((task) => {
      if (task.id === parseInt(data, 10)) {
        task.status = status;
      }
      return task;
    });
    this.setState({ tasks: updated });
  };

  render() {
    const { tasks } = this.state;
    console.log("tasks", tasks);
    let pending = tasks.filter((data) => data.status === "In Progress");
    let done = tasks.filter((data) => data.status === "Completed");
    let newOrder = tasks.filter((data) => data.status === "New Order");
    let waiting = tasks.filter((data) => data.status === "Delivered");

    return (
      <div className="container">
        <div
          className="order small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, "New Order")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Todo List</h4>
                  <button style={{ width: "100%" }}>+</button>
                  {newOrder.map((task) => (
                    <div
                      className="card"
                      key={task.id}
                      id={String(task.id)}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="pending small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, "In Progress")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>In Progress</h4>
                  <button style={{ width: "100%" }}>+</button>
                  {pending.map((task) => (
                    <div
                      className="card"
                      key={task.id.toString()}
                      id={String(task.id)}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="done small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, true, "Completed")}
        >
          <section className="drag_container">
            <div className="container">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Completed</h4>
                  <button style={{ width: "100%" }}>+</button>
                  {done.map((task) => (
                    <div
                      className="card"
                      key={task.id.toString()}
                      id={String(task.id)}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TaskList;
