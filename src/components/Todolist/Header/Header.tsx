import {FC} from 'react';
import styles from './Header.module.scss';
interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        Todos
      </div>
      <div>
        Удалить
      </div>
    </div>
  );
};