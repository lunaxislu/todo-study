import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/config/configStore';
import { switchTodo } from '../../../store/module/todoSlice';
import Todo from '../Todo';

const DoneWork = () => {
  const dispatch = useDispatch<AppDispatch>();
  const changeTodoHandler = (e: MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      console.log(e.target.id);
      console.log(e.target.name);
      if (e.target.name === 'switch') {
        console.log;
        switchTodoStateHandler(e.target.id);
      }
    }
  };

  const switchTodoStateHandler = (id: string) => {
    console.log(id);
    dispatch(switchTodo(id));
  };
  return (
    <div>
      <Todo.title className="text-2xl" level={2}>
        Done Work 🕶️
      </Todo.title>
      <Todo.list isDone={true} onClick={changeTodoHandler} />
    </div>
  );
};

export default DoneWork;
