'use client';

import { FC } from 'react';
import TodosItem from '../TodosItem';
import Spinner from '@/components/Spinner';
import useGetTodos from '@/queries/useGetTodos';

interface Props {}

const Todos: FC<Props> = () => {
  // 데이터 페칭
  const { data, isPending, isError } = useGetTodos();

  // 로딩
  if (isPending) {
    return <Spinner />;
  }

  // 에러 발생
  if (isError) {
    return <div>에러 발생</div>;
  }

  // 데이터 없음
  if (!data || data.data.length === 0) {
    return <div>데이터 없음</div>;
  }

  return (
    <ul>
      {data?.data?.map((todo) => (
        <TodosItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default Todos;
