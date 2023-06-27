import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useMemo} from "react";
import {TodolistService} from "../services/todolist.service.ts";
import {ICreateTodolist} from "../services/todolist.type.ts";

export const useTodolistQuery = (todolistId?: string, taskId?: string, page?: number) => {
  const getOneTodolist = useQuery({
    queryFn: () => TodolistService.fetchOneTodolist(todolistId!, page!),
    queryKey: ['oneTodolist', todolistId, page],
    enabled: !!todolistId
  })

  const getTodolists = useQuery({
    queryFn: () => TodolistService.fetchAllTodolist(),
    queryKey: ['allTodolists']
  })

  const client = useQueryClient()

  const createTodolist = useMutation({
    mutationFn: (data:ICreateTodolist) => TodolistService.createTodolist(data),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['allTodolists']})
    }
  })

  const deleteTodolist = useMutation({
    mutationFn: (todolistId: string) => TodolistService.removeTodolist(todolistId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['allTodolists']})
      getTodolists.refetch()
    }
  })

  const deleteTask = useMutation({
    mutationFn: (taskId: string) => TodolistService.removeTask(taskId),
    onSuccess: () => {
      client.invalidateQueries({queryKey: ['oneTodolist']})
      getOneTodolist.refetch()
    }
  })

  return useMemo(() => ({
    getTodolists, getOneTodolist, deleteTodolist, deleteTask, createTodolist

  }), [getTodolists, getOneTodolist, deleteTodolist, deleteTask, createTodolist])
}