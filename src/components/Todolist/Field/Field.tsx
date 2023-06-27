import {FC} from 'react';
import {ICreateTask, ICreateTodolist} from "../../../services/todolist.type.ts";
import {UseFormRegister} from "react-hook-form";


interface IFieldProps {
  register: UseFormRegister<ICreateTodolist | ICreateTask>
  name: "title" | 'text'
  styles?: { readonly [key: string]: string }
}

export const Field: FC<IFieldProps> = ({styles, name, register}) => {
  return (
    <div className={styles?.field}>
      <input {...register(name)}
             className={styles?.input}
             type="text"
             placeholder={'Enter todo here'}
      />
      <button className={styles?.btn}>Submit</button>
    </div>
  );
};