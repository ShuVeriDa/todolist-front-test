import {FC} from 'react';
import styles from './Tasks.module.scss';
import {FaTrashAlt} from "react-icons/fa";
import {MdModeEditOutline} from "react-icons/md";
import {ITask} from "../../../services/todolist.type.ts";

interface ITasksProps {
  task: ITask
}

export const Tasks: FC<ITasksProps> = ({task}) => {
  return (
    <div className={styles.tasks}>
      <div className={styles.checkbox}>
        <input type="checkbox" checked={task.completed}/>
      </div>
      <div className={styles.title}>
        {task.text}
      </div>
      <div className={styles.btns}>
        <div className={styles.edit}> <MdModeEditOutline /></div>
        <div className={styles.remove}><FaTrashAlt /></div>
      </div>

    </div>
  );
};