import { FunctionComponent, MouseEvent } from 'react';

interface I_ListProps {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  isDone: boolean;
}
const List: FunctionComponent<I_ListProps> = ({ onClick, isDone }) => {
  return <div className="flex flex-wrap w-full" onClick={onClick}></div>;
};

export default List;
