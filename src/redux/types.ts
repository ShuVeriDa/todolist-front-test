export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface IAuthInputType {
  email: string
  password: string
  nickname: string
}