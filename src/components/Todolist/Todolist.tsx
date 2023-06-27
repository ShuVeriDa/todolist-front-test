import {FC} from 'react';
import styles from './Todolist.module.scss';
import {Header} from "./Header/Header.tsx";
import {Field} from "./Field/Field.tsx";
import {Tasks} from "./Tasks/Tasks.tsx";
import stylesTask from '../Todolist/Field/TaskField.module.scss';
import {ITodolist} from "../../services/todolist.type.ts";
interface ITodolistProps {
  todolist: ITodolist
}

export const Todolist: FC<ITodolistProps> = ({todolist}) => {
  return (
    <div className={styles.todolist}>
      <Header/>
      <Field styles={stylesTask}/>
      <div className={styles.main}>
        {todolist.tasks.map(task => {
          return <Tasks key={task.id}
                        task={task}
          />
        })}
      </div>
    </div>
  );
};