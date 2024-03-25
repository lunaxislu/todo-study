import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/config/configStore';
import { removeTodo, switchTodo } from '../store/module/todoSlice';

const useChangeTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const changeTodoStateHandler = (e: MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      switch (e.target.name) {
        case 'switch':
          switchTodoState(e.target.id);
          break;
        case 'remove':
          removeTodoSate(e.target.id);
      }
    }
  };

  const switchTodoState = (id: string) => {
    dispatch(switchTodo(id));
  };

  const removeTodoSate = (id: string) => {
    dispatch(removeTodo(id));
  };

  return { changeTodoStateHandler };
};

export default useChangeTodo;
