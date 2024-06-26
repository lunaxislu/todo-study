import Todo from '../components/todo/Todo';

const TodoPage = () => {
  return (
    <Todo>
      <Todo.title className="text-4xl py-[60px]" level={1} />
      <Todo.form />
      <Todo.to_work />
      <Todo.done_work />
    </Todo>
  );
};

export default TodoPage;
