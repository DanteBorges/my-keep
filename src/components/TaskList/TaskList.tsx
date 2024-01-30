import React, { useState } from "react";
import {
  Card,
  Heading4,
  Container,
  DragColumn,
  DragRow,
  SmallBox,
  HeadCard,
  CreateCardButton,
} from "./styles";
import AddIcon from "@mui/icons-material/Add";
import ModalAddCard from "../ModalAddCard/ModalAddCard";

interface Task {
  id: number;
  name: string;
  status: string;
  hours: number;
  minutes: number;
  done?: boolean;
  newOrder?: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks: initialTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks || []);
  const [openModal, setOpenModal] = useState(false);

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    let element = evt.currentTarget;
    element.classList.add("dragged");
    evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove("dragged");
  };

  const onDragEnter = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add("dragged-over");
    evt.dataTransfer.dropEffect = "move";
  };

  const onDragLeave = (evt: React.DragEvent<HTMLDivElement>) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;

    if (!newTarget || newTarget === currentTarget) return;

    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove("dragged-over");
  };

  const onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  const onDrop = (
    evt: React.DragEvent<HTMLDivElement>,
    value: boolean,
    status: string
  ) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove("dragged-over");
    let data = evt.dataTransfer.getData("text/plain");
    let updated = tasks.map((task) => {
      if (task.id === parseInt(data, 10)) {
        task.status = status;
      }
      return task;
    });
    setTasks(updated);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Container>
        <SmallBox
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "New Order")}
        >
          <DragColumn>
            <DragRow>
              <HeadCard>
                <Heading4>To do List</Heading4>
                <CreateCardButton onClick={() => setOpenModal(true)}>
                  <AddIcon style={{ color: "#059e0a", fontSize: "bold" }} />
                </CreateCardButton>
              </HeadCard>
              {tasks
                .filter((data) => data.status === "New Order")
                .map((task) => (
                  <Card
                    key={task.id}
                    id={String(task.id)}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                  >
                    <div className="card_right">
                      <div className="name">{task.name}</div>
                      <div className="status">{task.status}</div>
                      <div style={{ display: "flex" }}>
                        <div className="hours" style={{ marginRight: "5px" }}>
                          <span>{task.hours}</span> hours
                        </div>
                        <div className="minutes">
                          <span style={{ marginRight: "5px" }}>
                            {task.minutes}
                          </span>{" "}
                          minutes
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </DragRow>
          </DragColumn>
        </SmallBox>

        <SmallBox
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "In Progress")}
        >
          <DragColumn>
            <DragRow>
              <HeadCard>
                <Heading4>In Progress</Heading4>
                <CreateCardButton onClick={() => setOpenModal(true)}>
                  <AddIcon style={{ color: "#059e0a", fontSize: "bold" }} />
                </CreateCardButton>
              </HeadCard>
              {tasks
                .filter((data) => data.status === "In Progress")
                .map((task) => (
                  <Card
                    key={task.id.toString()}
                    id={String(task.id)}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                  >
                    <div className="card_right">
                      <div className="name">{task.name}</div>
                      <div className="status">{task.status}</div>
                      <div style={{ display: "flex" }}>
                        <div className="hours" style={{ marginRight: "5px" }}>
                          <span>{task.hours}</span> hours
                        </div>
                        <div className="minutes">
                          <span style={{ marginRight: "5px" }}>
                            {task.minutes}
                          </span>{" "}
                          minutes
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </DragRow>
          </DragColumn>
        </SmallBox>

        <SmallBox
          onDragLeave={(e) => onDragLeave(e)}
          onDragEnter={(e) => onDragEnter(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, false, "Completed")}
        >
          <DragColumn>
            <DragRow>
              <HeadCard>
                <Heading4>Completed </Heading4>
                <CreateCardButton onClick={() => setOpenModal(true)}>
                  <AddIcon style={{ color: "#059e0a", fontSize: "bold" }} />
                </CreateCardButton>
              </HeadCard>

              {tasks
                .filter((data) => data.status === "Completed")
                .map((task) => (
                  <Card
                    key={task.id}
                    id={String(task.id)}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                  >
                    <div className="card_right">
                      <div className="name">{task.name}</div>
                      <div className="status">{task.status}</div>
                      <div style={{ display: "flex" }}>
                        <div className="hours" style={{ marginRight: "5px" }}>
                          <span>{task.hours}</span> hours
                        </div>
                        <div className="minutes">
                          <span style={{ marginRight: "5px" }}>
                            {task.minutes}
                          </span>{" "}
                          minutes
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </DragRow>
          </DragColumn>
        </SmallBox>
      </Container>

      <ModalAddCard open={openModal} onClose={closeModal} />
    </>
  );
};

export default TaskList;
