import {FC} from 'react';
import styles from './Todolist.module.scss';
import {Header} from "./Header/Header.tsx";
import {Field} from "./Field/Field.tsx";
import {Tasks} from "./Tasks/Tasks.tsx";
import stylesTask from '../Todolist/Field/TaskField.module.scss';
import {ITodolist} from "../../services/todolist.type.ts";
import {useTodolistQuery} from "../../react-query/useTodolistQuery.ts";
interface ITodolistProps {
  todolist: ITodolist
}

export const Todolist: FC<ITodolistProps> = ({todolist}) => {
  const {getOneTodolist, deleteTodolist} = useTodolistQuery(todolist.id, 3)
  const {mutate: remove} = deleteTodolist
  const {data} = getOneTodolist
  const tasks = data?.tasks

  const removeTodolist = () => {
    remove(todolist.id)
  }

  return (
    <div className={styles.todolist}>
      <Header remove={removeTodolist}/>
      <Field styles={stylesTask}/>
      <div className={styles.main}>
        {tasks?.map(task => {
          return <Tasks key={task.id}
                        task={task}
          />
        })}
      </div>
    </div>
  );
};