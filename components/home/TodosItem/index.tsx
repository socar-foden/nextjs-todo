'use client';

import { TodoInfo, UpdateTodoRequest } from '@/apis/todos/type';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TodoFormData } from '../type';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../validation';
import CheckBox from '@/components/CheckBox';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { useMutation } from '@tanstack/react-query';
import { deleteTodo, updateTodo } from '@/apis/todos';
import useGetTodos from '@/queries/useGetTodos';

interface Props {
  todo: TodoInfo;
}

const TodosItem: FC<Props> = ({ todo: { completed, todo, id } }) => {
  // 데이터 페칭
  const mutateDeleteTodo = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      refetch();
    },
  });
  const mutateUpdateTodo = useMutation({
    mutationFn: (data: UpdateTodoRequest) => updateTodo(id, data),
    onSuccess: () => {
      refetch();
    },
  });
  const { refetch } = useGetTodos();

  // 폼
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm<TodoFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      completed,
      todo,
    },
  });

  const onSubmit = (data: TodoFormData) => mutateUpdateTodo.mutate(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex items-center gap-4 p-2'
    >
      {/* 폼 내용 */}
      <div className='flex items-center gap-2'>
        {/* 수행 여부 */}
        <Controller
          control={control}
          name='completed'
          render={({ field: { value, onChange } }) => (
            <CheckBox checked={value} onChange={onChange} />
          )}
        />

        {/* 내용 */}
        <Controller
          control={control}
          name='todo'
          render={({ field: { value, onChange } }) => (
            <TextInput value={value} onChange={onChange} />
          )}
        />
      </div>

      {/* 버튼 */}
      <div className='flex items-center gap-1'>
        <Button
          type='submit'
          disabled={!isValid}
          isLoading={mutateUpdateTodo.isPending}
        >
          수정
        </Button>
        <Button
          type='button'
          variant='secondary'
          isLoading={mutateDeleteTodo.isPending}
          onClick={() => mutateDeleteTodo.mutate(id)}
        >
          삭제
        </Button>
      </div>
    </form>
  );
};

export default TodosItem;
