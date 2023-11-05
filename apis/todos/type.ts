export type TodoInfo = {
  id: number;
  todo: string;
  completed: boolean;
};

export type AddTodoRequest = {
  todo: string;
  completed: boolean;
};

export type GetTodosRequest = {};

export type GetTodosResponse = TodoInfo[];

export type UpdateTodoRequest = AddTodoRequest;
