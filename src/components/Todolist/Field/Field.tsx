import {FC} from 'react';
import {ICreateTodolist} from "../../../services/todolist.type.ts";
import {UseFormRegister} from "react-hook-form";


interface IFieldProps {
  register?: UseFormRegister<ICreateTodolist>
  styles?: { readonly [key: string]: string }
}

export const Field: FC<IFieldProps> = ({styles, register}) => {
  return (
    <div className={styles?.field}>
      <input {...register ? register("title") : {}}
             className={styles?.input}
             type="text"
             placeholder={'Enter todo here'}
      />
      <button className={styles?.btn}>Submit</button>
    </div>
  );
};