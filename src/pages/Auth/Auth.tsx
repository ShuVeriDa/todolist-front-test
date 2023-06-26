import {FC, useState} from 'react';
import styles from './Auth.module.scss';
import {Login} from "../../components/Auth/Login/Login.tsx";
import {Register} from "../../components/Auth/Register/Register.tsx";
interface IAuthProps {
}

export const Auth: FC<IAuthProps> = () => {
  const [type, setType] = useState<'login' | 'register'>('login')

  const setLoginType = () => {
    setType('login')
  }

  const setRegisterType = () => {
    setType('register')
  }

  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <div className={styles.list}>
          <ul>
            <li onClick={setLoginType} style={type === 'login' ? {color: 'green'} : {color: "gray"}}> SIGN IN</li>
            <li onClick={setRegisterType} style={type === 'register' ? {color: 'green'} : {color: "gray"}}> SIGN UP</li>
          </ul>
        </div>
        {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
        <div className={styles.title}>
          <h2 className={styles.h2}>{type === 'login' ? "Вход" : "Регистрация"}</h2>
        </div>

        {type === 'login' ? <Login/> : <Register />}

          <div>
            {/*<SubmitButton title={"Вход"}*/}
            {/*/>*/}
          </div>
        {/*</form>*/}
      </div>
    </div>
  );
};