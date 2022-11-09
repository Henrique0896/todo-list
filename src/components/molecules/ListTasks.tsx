import { Task } from "../atoms/Task";
import styles from "./ListTasks.module.css";

export function ListTasks() {
  function onCheckAsDone() {}
  function onRemoveTask() {}
  return (
    <div>
      Essa é uma lista de tarefasa
      <Task
        taskStatus="not done"
        id="01"
        onChangeTaskStatus={onCheckAsDone}
        text="Hello word"
        onDeleteTask={onRemoveTask}
      />
      <Task
        taskStatus="done"
        id="02"
        onChangeTaskStatus={onCheckAsDone}
        text="Hello word"
        onDeleteTask={onRemoveTask}
      />
      <Task
        taskStatus="done"
        id="03"
        onChangeTaskStatus={onCheckAsDone}
        text="Hello word"
        onDeleteTask={onRemoveTask}
      />
    </div>
  );
}
