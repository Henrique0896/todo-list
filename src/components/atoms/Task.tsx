import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { TaskPropsModel } from "../../models/TaskPropsModel";

export function Task({
  id,
  text,
  taskStatus,
  onChangeTaskStatus,
  onDeleteTask,
}: TaskPropsModel): JSX.Element {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkButton}
        onClick={() => onChangeTaskStatus(id)}
      >
        {taskStatus === "done" ? (
          <CheckCircle size={24} weight="fill" className={styles.check} />
        ) : (
          <Circle size={24} className={styles.check} />
        )}
      </button>
      {taskStatus === "done" ? (
        <p>{text}</p>
      ) : (
        <p>
          <s>{text}</s>
        </p>
      )}

      <button
        title="Excluir"
        className={styles.delete}
        onClick={() => onDeleteTask(id)}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
