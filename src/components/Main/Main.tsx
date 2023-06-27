import {FC} from 'react';
import styles from './Main.module.scss';
import {Todolist} from "../Todolist/Todolist.tsx";
import {Field} from "../Todolist/Field/Field.tsx";
import stylesTodolist from '../Todolist/Field/TodolistField.module.scss';
import {useTodolistQuery} from "../../react-query/useTodolistQuery.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICreateTodolist} from "../../services/todolist.type.ts";


export const Main: FC = () => {
  const {getTodolists, createTodolist} = useTodolistQuery()
  const {mutate: createTodo} = createTodolist
  const {data: todolists, isSuccess} = getTodolists
  const {register, handleSubmit, reset} = useForm<ICreateTodolist>({mode: 'onChange'})

  const onSubmit: SubmitHandler<ICreateTodolist> = (data) => {
    createTodo(data)
    reset()
  }
  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <Field styles={stylesTodolist}
                 register={register}
          />
        </div>
      </form>
      <div className={styles.todolists}>
        {isSuccess && todolists.map(todolist => {
          return <Todolist key={todolist.id}
                           todolist={todolist}
          />
        })}

      </div>

    </main>
  );
};