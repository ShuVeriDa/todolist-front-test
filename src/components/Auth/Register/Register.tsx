import {FC} from 'react';
import styles from './Register.module.scss';
import {Input} from "../../Input/Input.tsx";
import stylesInput from '../../Input/Input.module.scss';
import {validEmail} from "../../../utils/regex.ts";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {IAuthInputType} from "../../../redux/types.ts";

interface IRegisterProps {
  register: UseFormRegister<any>
  errors: FieldErrors<IAuthInputType>
  isPasswordRequired?: boolean
}

export const Register: FC<IRegisterProps> = (
  {
    isPasswordRequired,
    errors,
    register,
  }
) => {
  return (
    <div className={styles.wrapper}>
      <Input {...register('email', {
          required: "Электронная почта обязательна", pattern: {
            value: validEmail,
            message: 'Пожалуйста, введите действительный адрес электронной почты'
          }
        }
      )}
             placeholder={'Почта'}
             type={'email'}
             error={errors?.email}
             styles={stylesInput}
      />

      <Input {...register('password', isPasswordRequired ? {
          required: "Пароль обязателен",
          minLength: {
            value: 6,
            message: "Минимальная длина должна быть больше 6 символов"
          }
        } : {}
      )}
             placeholder={'Пароль'}
             type={'password'}
             error={errors?.password}
             styles={stylesInput}
      />

      <Input {...register('nickname', isPasswordRequired ? {
          required: "Nickname обязателен",
          minLength: {
            value: 6,
            message: "Минимальная длина должна быть больше 6 символов"
          }
        } : {}
      )}
             placeholder={'Nickname'}
             type={'text'}
             error={errors?.nickname}
             styles={stylesInput}
      />
    </div>
  );
};