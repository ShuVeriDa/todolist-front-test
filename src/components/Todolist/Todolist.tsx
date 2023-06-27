import {FC} from 'react';
import styles from './Todolist.module.scss';
import {Header} from "./Header/Header.tsx";
import {Field} from "./Field/Field.tsx";
import {Tasks} from "./Tasks/Tasks.tsx";
import stylesTask from '../Todolist/Field/TaskField.module.scss';
interface ITodolistProps {
}

export const Todolist: FC<ITodolistProps> = () => {
  return (
    <div className={styles.todolist}>
      <Header/>
      <Field styles={stylesTask}/>
      <div className={styles.main}>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
        <Tasks/>
      </div>
    </div>
  );
};