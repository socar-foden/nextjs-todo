'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';
import schema from './validation';
import { TodoFormData } from './type';
import { Controller, useForm } from 'react-hook-form';
import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';
import TextInput from '@/components/TextInput';

interface Props {}

const TodoForm: FC<Props> = () => {
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm<TodoFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: TodoFormData) => console.log(data);

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
          name='checked'
          render={({ field: { value, onChange } }) => (
            <CheckBox checked={value} onChange={onChange} />
          )}
        />

        {/* 내용 */}
        <Controller
          control={control}
          name='text'
          render={({ field: { value, onChange } }) => (
            <TextInput value={value} onChange={onChange} />
          )}
        />
      </div>

      {/* 버튼 */}
      <div className='flex items-center gap-1'>
        <Button type='submit' disabled={!isValid}>
          수정
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
