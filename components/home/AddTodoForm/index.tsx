'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import schema from '../validation';
import { TodoFormData } from '../type';
import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';
import TextInput from '@/components/TextInput';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/apis/todos';
import useGetTodos from '@/queries/useGetTodos';

interface Props {}

const AddTodoForm: FC<Props> = () => {
  // 데이터 패칭
  const { mutate, isPending } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryGetTodos.refetch();
      reset();
    },
  });
  const queryGetTodos = useGetTodos();

  // 폼
  const {
    handleSubmit,
    formState: { isValid },
    control,
    reset,
  } = useForm<TodoFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      completed: false,
      todo: '',
    },
  });

  const onSubmit = (data: TodoFormData) => mutate(data);

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
        <Button type='submit' disabled={!isValid} isLoading={isPending}>
          추가
        </Button>
      </div>
    </form>
  );
};

export default AddTodoForm;
