import { getTodos } from '@/apis/todos';
import { useQuery } from '@tanstack/react-query';

const useGetTodos = () => {
  return useQuery({
    queryKey: ['getTodos'],
    queryFn: getTodos,
  });
};

export default useGetTodos;
