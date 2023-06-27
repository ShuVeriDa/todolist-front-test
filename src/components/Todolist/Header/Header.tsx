import {FC} from 'react';
import styles from './Header.module.scss';
import {FaTrashAlt} from "react-icons/fa";
interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        Todos
      </div>
      <div className={styles.remove}>
       <FaTrashAlt />
      </div>
    </div>
  );
};