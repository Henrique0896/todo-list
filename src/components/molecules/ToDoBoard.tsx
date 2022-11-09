import { AddTask } from "../atoms/AddTask";
import styles from "./ToDoBoard.module.css";
import { ClipboardText } from "phosphor-react";
import { Task } from "../atoms/Task";
import { useState } from "react";
import { TaskModel } from "../../models/TaskModel";

export function ToDoBoard() {
  const [tasks, setTasks] = useState([] as TaskModel[]);

  function onChangeTaskStatus(){}

  function onDeleteTask(){}

  function onCreateTask(newTask: TaskModel) {
    setTasks((state) => [...state, newTask]);
  }

  function getFinishedTasksCount(): number {
    let finishedTasksCount = 0;
    tasks.forEach((task) => {
      if (task.taskStatus === "done") finishedTasksCount++;
    });
    return finishedTasksCount;
  }

  return (
    <div className={styles.wrapper}>
      <AddTask onCreateTask={onCreateTask} />
      <div className={styles.tasksInfo}>
        <div className={styles.tasksInfoContainer}>
          <span className={styles.tasksInfoTitleCreated}>Tarefas criadas</span>
          <span className={styles.taskInfoCounter}>{tasks.length}</span>
        </div>
        <div className={styles.tasksInfoContainer}>
          <span className={styles.tasksInfoTitleDone}>Concluídas</span>
          <span className={styles.taskInfoCounter}>
            {tasks.length > 0
              ? `${getFinishedTasksCount()} de ${tasks.length}`
              : 0}
          </span>
        </div>
      </div>
      <div className={styles.tasksList}>
        {tasks.length === 0 ? (
          <div className={styles.noTasks}>
            <ClipboardText width={56} height={56} color="#3d3d3d" />
            <span>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
          </div>
        ) : (
          tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              text={task.text}
              onChangeTaskStatus={onChangeTaskStatus}
              onDeleteTask={onDeleteTask}
              taskStatus={task.taskStatus}
            />
          ))
        )}
      </div>
    </div>
  );
}
