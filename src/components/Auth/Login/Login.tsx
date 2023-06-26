import {FC} from 'react';
import styles from './Login.module.scss';
import {Input} from "../../Input/Input.tsx";
import stylesInput from '../../Input/Input.module.scss';
interface ILoginProps {
}

export const Login: FC<ILoginProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Input
             placeholder={'Email'}
             styles={stylesInput}
      />
      <Input 
             placeholder={'Password'}
             styles={stylesInput}
      />
    </div>
  );
};