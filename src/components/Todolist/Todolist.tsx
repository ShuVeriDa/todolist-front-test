import {FC, useState} from 'react';
import styles from './Todolist.module.scss';
import {Header} from "./Header/Header.tsx";
import {Field} from "./Field/Field.tsx";
import {Tasks} from "./Tasks/Tasks.tsx";
import stylesTask from '../Todolist/Field/TaskField.module.scss';
import {ITodolist} from "../../services/todolist.type.ts";
import {useTodolistQuery} from "../../react-query/useTodolistQuery.ts";
import {Pagination} from "../Pagination/Pagination.tsx";
interface ITodolistProps {
  todolist: ITodolist
}

export const Todolist: FC<ITodolistProps> = ({todolist}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const {getOneTodolist, deleteTodolist} = useTodolistQuery(todolist.id, currentPage)
  const {mutate: remove} = deleteTodolist
  const {data, isSuccess} = getOneTodolist
  const tasks = data?.tasks

  const removeTodolist = () => remove(todolist.id)
  const onChangeCurrentPage = (page: number) => setCurrentPage(page)
  const totalPages = Math.ceil(todolist.tasks.length / 5)

  console.log(tasks?.length)

  return (
    <div className={styles.todolist}>
      <Header remove={removeTodolist}/>
      <Field styles={stylesTask}/>
      {tasks?.length! > 0 && <div className={styles.main}>
        {tasks?.map(task => {
          return <Tasks key={task.id}
                        task={task}
          />
        })}



      </div>}
      <div className={styles.pagination}>
        <Pagination currentPage={currentPage}
                    onChangePage={onChangeCurrentPage}
                    maxPage={totalPages}
        />
      </div>

    </div>
  );
};