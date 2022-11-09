import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { v4 } from "uuid";
import { TaskModel } from "../../models/TaskModel";
import styles from "./AddTask.module.css";

interface NewTaskInterface {
  onCreateTask: (newTask: TaskModel) => void;
}
export function AddTask({ onCreateTask }: NewTaskInterface): JSX.Element {
  const [taskText, setTaskText] = useState("");

  function handleCreateTask(): void {
    const newTask: TaskModel = {id: v4(), text: taskText, taskStatus: "not done"}
    onCreateTask(newTask);
    setTaskText("");
  }
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button title="Criar" onClick={handleCreateTask}>
        Criar <PlusCircle width={16} height={16} weight="bold" />
      </button>
    </div>
  );
}
