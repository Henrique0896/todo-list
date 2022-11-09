export interface TaskModel {
  id: string;
  text: string;
  taskStatus: 'done' | 'not done';
  onChangeTaskStatus?: (id: string) => void;
  onDeleteTask?: (id: string) => void;
}
