import {FC} from 'react';
import styles from './Header.module.scss';
import {FaTrashAlt} from "react-icons/fa";

interface IHeaderProps {
  remove: () => void
}

export const Header: FC<IHeaderProps> = ({remove}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        Todos
      </div>
      <div className={styles.remove} onClick={remove}>
       <FaTrashAlt />
      </div>
    </div>
  );
};