import { Task } from "../atoms/Task"
import styles from './ListTasks.module.css'

export function ListTasks(){
    return (
        <div>
            Essa é uma lista de tarefasa
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}