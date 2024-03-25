import { FunctionComponent, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from '../../../store/config/configStore';
import Todo from '../Todo';

interface I_ListProps {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  isDone: boolean;
}
const List: FunctionComponent<I_ListProps> = ({ onClick, isDone }) => {
  const todoSlice = useSelector((state: Rootstate) => state.todoSlice);

  return (
    <div className="flex flex-wrap w-full" onClick={onClick}>
      {todoSlice
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => (
          <Todo.card key={todo.id} id={todo.id} text={todo.text} title={todo.title} isDone={todo.isDone} />
        ))}
    </div>
  );
};

export default List;
