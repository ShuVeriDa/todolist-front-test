import {instance} from "../api/api.interceptor.ts";
import {ICreateTask, ICreateTodolist, ITodolist} from "./todolist.type.ts";
import {getTodolistUrl} from "../api/api.config.ts";

export const TodolistService = {
  fetchAllTodolist: async () => {
    const res = await instance.get<ITodolist[]>(getTodolistUrl(``))
    return res.data
  },

  fetchOneTodolist: async (todolistId: string, page: number) => {
    const res = await instance.get<ITodolist>(getTodolistUrl(`/${todolistId}?page=${page}`))
    return res.data
  },

  createTodolist: async (data: ICreateTodolist) => {
    const res = await instance.post<ITodolist>(getTodolistUrl(''), data)
    return res.data
  },

  createTask: async (data: ICreateTask) => {
    const res = await instance.post<ITodolist>(getTodolistUrl('/tasks'), data)
    return res.data
  },

  removeTodolist: async (todolistId: string) => {
    const res = await instance.delete(getTodolistUrl(`/${todolistId}`))
    return res.data
  },
  removeTask: async (taskId: string) => {
    const res = await instance.delete(getTodolistUrl(`/tasks/${taskId}`))
    return res.data
  },
}