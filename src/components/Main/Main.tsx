import {FC} from 'react';
import styles from './Main.module.scss';
import {Todolist} from "../Todolist/Todolist.tsx";
import {Field} from "../Todolist/Field/Field.tsx";
import stylesTodolist from '../Todolist/Field/TodolistField.module.scss';
import {useTodolistQuery} from "../../react-query/useTodolistQuery.ts";


export const Main: FC = () => {
  const {getTodolists} = useTodolistQuery()
  const {data: todolists, isSuccess} = getTodolists
  return (
    <main className={styles.main}>
      <div className={styles.field}>
        <Field styles={stylesTodolist}/>
      </div>
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