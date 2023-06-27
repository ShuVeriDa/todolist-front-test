export interface ITodolist {
  id: string
  title: string
  tasks: ITask[]
}

export interface ITask {
  id: string
  text: string
  completed: boolean
}

export interface ICreateTodolist {
  title: string
}

export interface IUpdateTodolist extends ICreateTodolist{}
export interface IUpdateTask {
  text?: string
  completed?: boolean
  todolistId: string;
}

export interface ICreateTask {
  text: string;
  todolistId: string;
}