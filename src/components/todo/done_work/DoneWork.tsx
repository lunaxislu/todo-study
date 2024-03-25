import useChangeTodo from '../../../hooks/useChangeTodo';
import Todo from '../Todo';

const DoneWork = () => {
  const { changeTodoStateHandler } = useChangeTodo();
  return (
    <div>
      <Todo.title className="text-2xl" level={2}>
        Done Work 🕶️
      </Todo.title>
      <Todo.list isDone={true} onClick={changeTodoStateHandler} />
    </div>
  );
};

export default DoneWork;
