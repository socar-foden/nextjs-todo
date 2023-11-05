import { AxiosResponse } from 'axios';
import instance from '..';
import { AddTodoRequest, AddTodoResponse } from './type';

export const addTodo = (data: AddTodoRequest) =>
  instance.post<AxiosResponse<AddTodoResponse>>('/add', data);
