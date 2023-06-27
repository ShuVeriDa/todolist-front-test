import {FC, useState} from 'react';
import styles from './Todolist.module.scss';
import {Header} from "./Header/Header.tsx";
import {Field} from "./Field/Field.tsx";
import {Tasks} from "./Tasks/Tasks.tsx";
import stylesTask from '../Todolist/Field/TaskField.module.scss';
import {ICreateTask, ICreateTodolist, ITodolist} from "../../services/todolist.type.ts";
import {useTodolistQuery} from "../../react-query/useTodolistQuery.ts";
import {Pagination} from "../Pagination/Pagination.tsx";
import {SubmitHandler, useForm} from "react-hook-form";

interface ITodolistProps {
  todolist: ITodolist
}

export const Todolist: FC<ITodolistProps> = ({todolist}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const {getOneTodolist, deleteTodolist, deleteTask, createTask} = useTodolistQuery(todolist.id, undefined, currentPage)
  const {mutate: createTasksTodo} = createTask
  const {mutate: removeTodo} = deleteTodolist
  const {mutate: removeTask} = deleteTask
  const {data} = getOneTodolist
  const tasks = data?.tasks

  const removeTodolist = () => removeTodo(todolist.id)
  const removeTodoTask = (taskId: string) => removeTask(taskId)
  const onChangeCurrentPage = (page: number) => setCurrentPage(page)
  const totalPages = Math.ceil(todolist.tasks.length / 5)

  const {register, handleSubmit, reset} = useForm<ICreateTask>({mode: 'onChange'})

  const onSubmit: SubmitHandler<ICreateTask> = (data) => {
    createTasksTodo({todolistId: todolist.id, text: data.text})
    reset()
  }

  return (
    <div className={styles.todolist}>
      <Header title={todolist.title} remove={removeTodolist}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field register={register}
               name={'text'}
               styles={stylesTask}
        />
      </form>
      {tasks && tasks.length > 0 && <div className={styles.main}>
        {tasks?.map(task => {
          return <Tasks key={task.id}
                        task={task}
                        removeTask={removeTodoTask}
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