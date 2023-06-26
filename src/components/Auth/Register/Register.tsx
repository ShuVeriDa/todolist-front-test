import {FC} from 'react';
import styles from './Register.module.scss';
import {Input} from "../../Input/Input.tsx";
import stylesInput from '../../Input/Input.module.scss';
interface ILoginProps {
}

export const Register: FC<ILoginProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Input
             placeholder={'Email'}
             styles={stylesInput}
      />
      <Input
        placeholder={'Nickname'}
        styles={stylesInput}
      />
      <Input 
             placeholder={'Password'}
             styles={stylesInput}
      />
    </div>
  );
};