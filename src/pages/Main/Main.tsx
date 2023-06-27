import {FC} from 'react';
import styles from './Main.module.scss';
import {Header} from "../../components/Header/Header.tsx";
interface IMainProps {
}

export const Main: FC<IMainProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};