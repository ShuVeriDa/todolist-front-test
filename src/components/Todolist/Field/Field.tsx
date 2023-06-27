import {FC} from 'react';


interface IFieldProps {
  styles?: { readonly [key: string]: string }
}

export const Field: FC<IFieldProps> = ({styles}) => {
  return (
    <div className={styles?.field}>
      <input className={styles?.input} type="text" placeholder={'Enter todo here'}/>
      <button className={styles?.btn}>Submit</button>
    </div>
  );
};