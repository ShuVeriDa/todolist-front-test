import {StatusEnum} from "../types";

export interface IUser {
  id: string
  email: string
  nickname: string
  createdAt: string
  updatedAt: string
}
export interface IInitialState {
  user: IUser | null
  status: StatusEnum
}

export interface IRegister {
  email: string
  password: string
  nickname: string
}

export interface ILogin {
  email: string
  password: string
}

export interface ITokens {
  refreshToken: string
  accessToken: string
}

export interface IAuthResponse extends ITokens {
 user: IUser
}

