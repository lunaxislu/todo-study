import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/config/configStore';
import { removeTodo, switchTodo } from '../../../store/module/todoSlice';
import Todo from '../Todo';

const ToWork = () => {
  const dispatch = useDispatch<AppDispatch>();
  const changeTodoHandler = (e: MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      if (e.target.name === 'switch') {
        console.log;
        switchTodoStateHandler(e.target.id);
      }

      if (e.target.name === 'remove') {
        removeTodoHandler(e.target.id);
      }
    }
  };

  const switchTodoStateHandler = (id: string) => {
    console.log(id);
    dispatch(switchTodo(id));
  };
  const removeTodoHandler = (id: string) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="mt-14">
      <Todo.title className="text-2xl" level={2}>
        To Work 📣
      </Todo.title>
      <Todo.list isDone={false} onClick={changeTodoHandler} />
    </div>
  );
};

export default ToWork;
