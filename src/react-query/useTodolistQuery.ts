import {useQuery} from "@tanstack/react-query";
import {useMemo} from "react";
import {TodolistService} from "../services/todolist.service.ts";

export const useTodolistQuery = () => {
  const getTodolists = useQuery({
    queryFn: () => TodolistService.fetchAllTodolist(),
    queryKey: ['AllTodolists']
  })

  return useMemo(() => ({
    getTodolists

  }), [getTodolists])
}