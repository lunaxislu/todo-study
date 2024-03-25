import useChangeTodo from '../../../hooks/useChangeTodo';
import Todo from '../Todo';

const ToWork = () => {
  const { changeTodoStateHandler } = useChangeTodo();
  return (
    <div className="mt-14">
      <Todo.title className="text-2xl" level={2}>
        To Work 📣
      </Todo.title>
      <Todo.list isDone={false} onClick={changeTodoStateHandler} />
    </div>
  );
};

export default ToWork;
