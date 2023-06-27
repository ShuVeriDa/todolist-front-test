import {FC} from 'react';
import styles from './Tasks.module.scss';
interface ITasksProps {
}

export const Tasks: FC<ITasksProps> = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.checkbox}>
        <input type="checkbox"/>
      </div>
      <div className={styles.title}>
        title
      </div>
      <div className={styles.btns}>
        <button>edit</button>
        <button>remove</button>
      </div>
    </div>
  );
};