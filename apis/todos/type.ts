export type AddTodoRequest = {
  todo: string;
  completed: boolean;
  userId: number;
};

export type AddTodoResponse = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};
