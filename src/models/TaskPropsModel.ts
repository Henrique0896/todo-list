import { TaskModel } from "./TaskModel";

export interface TaskPropsModel extends TaskModel {
  onChangeTaskStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
}
