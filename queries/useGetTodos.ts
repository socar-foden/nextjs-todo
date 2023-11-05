import { getTodos } from '@/apis/todos';
import { useSuspenseQuery } from '@tanstack/react-query';

const useGetTodos = () => {
  return useSuspenseQuery({
    queryKey: ['getTodos'],
    queryFn: getTodos,
  });
};

export default useGetTodos;
