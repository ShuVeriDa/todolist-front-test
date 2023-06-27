import {instance} from "../api/api.interceptor.ts";
import {ITodolist} from "./todolist.type.ts";
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

  removeTodolist: async (todolistId: string) => {
    const res = await instance.delete(getTodolistUrl(`/${todolistId}`))
    return res.data
  }
}