import { AddTask } from "../atoms/AddTask"
import { ListTasks } from "../molecules/ListTasks"
import styles from './ToDoBoard.module.css'

export function ToDoBoard(){
    return (
        <div className={styles.wrapper}>
            <AddTask />
            <ListTasks />
        </div>
    )
}