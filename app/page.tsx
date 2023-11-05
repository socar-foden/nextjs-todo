import AddTodoForm from '@/components/home/AddTodoForm';
import Todos from '@/components/home/Todos';

const Home = () => {
  return (
    <div className='max-w-[400px] flex flex-col justify-center items-center'>
      {/* 생성 폼 */}
      <AddTodoForm />

      <div className='mt-4'>
        <Todos />
      </div>
    </div>
  );
};

export default Home;
