import {FC} from 'react';
import styles from './Main.module.scss';
import {Todolist} from "../Todolist/Todolist.tsx";
import {Field} from "../Todolist/Field/Field.tsx";
import stylesTodolist from '../Todolist/Field/TodolistField.module.scss';
interface IMainProps {
}

export const Main: FC<IMainProps> = () => {
  return (
    <main className={styles.main}>
      <div className={styles.field}>
        <Field styles={stylesTodolist}/>
      </div>
      <div className={styles.todolists}>
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
        <Todolist />
      </div>

    </main>
  );
};