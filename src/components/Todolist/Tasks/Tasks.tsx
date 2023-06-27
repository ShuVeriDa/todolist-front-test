import {FC} from 'react';
import styles from './Tasks.module.scss';
import {FaTrashAlt} from "react-icons/fa";
import {MdModeEditOutline} from "react-icons/md";
import {ITask} from "../../../services/todolist.type.ts";

interface ITasksProps {
  task: ITask
  removeTask: (taskId: string) => void
}

export const Tasks: FC<ITasksProps> = ({task, removeTask}) => {
  const removeTaskHandler = () => {
    removeTask(task.id)
  }
  return (
    <div className={styles.tasks}>
      <div className={styles.checkbox}>
        <input type="checkbox" defaultChecked={task.completed}/>
      </div>
      <div className={styles.title}>
        {task.text}
      </div>
      <div className={styles.btns}>
        <div className={styles.edit}> <MdModeEditOutline /></div>
        <div className={styles.remove} onClick={removeTaskHandler}><FaTrashAlt /></div>
      </div>

    </div>
  );
};