import instance from '..';
import {
  AddTodoRequest,
  GetTodosRequest,
  GetTodosResponse,
  UpdateTodoRequest,
} from './type';

export const addTodo = (data: AddTodoRequest) => instance.post('', data);

export const getTodos = (params: GetTodosRequest) =>
  instance.get<GetTodosResponse>('', {
    params: { _sort: 'id', _order: 'DESC' },
  });

export const deleteTodo = (id: number) => instance.delete(`/${id}`);

export const updateTodo = (id: number, data: UpdateTodoRequest) =>
  instance.patch(`/${id}`, data);
