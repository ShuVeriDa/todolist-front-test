import {FC, useState} from 'react';
import styles from './Auth.module.scss';
import {Login} from "../../components/Auth/Login/Login.tsx";
interface IAuthProps {
}

export const Auth: FC<IAuthProps> = () => {
  const [type, setType] = useState<'login' | 'register'>('login')
  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
          <div className={styles.header}>
            <div className={styles.logo}>
              {/*<img src={logo} alt=""/>*/}
            </div>
          </div>

        {type === 'login' && <Login/>}

          <div>
            {/*<SubmitButton title={"Вход"}*/}
            {/*/>*/}
          </div>
        {/*</form>*/}
      </div>
    </div>
  );
};