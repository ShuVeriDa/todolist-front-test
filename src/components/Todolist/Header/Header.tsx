import {FC} from 'react';
import styles from './Header.module.scss';
import {FaTrashAlt} from "react-icons/fa";

interface IHeaderProps {
  remove: () => void
  title: string
}

export const Header: FC<IHeaderProps> = ({remove, title}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.remove} onClick={remove}>
       <FaTrashAlt />
      </div>
    </div>
  );
};