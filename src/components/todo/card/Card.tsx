import { I_TodoSlice } from '../../../store/module/todoSlice';
import Todo from '../Todo';
import Button from '../button/Button';

const Card = ({ id, title, text, isDone }: I_TodoSlice) => {
  return (
    <div className="w-[280px] border border-green-700 p-4">
      <Todo.title className="text-xl" level={3}>
        {title}
      </Todo.title>
      <div className="">{text}</div>
      <div>
        <Button type="button" id={id} datatype="완료">
          {isDone ? '수정' : '완료'}
        </Button>
        <Button type="button" id={id} datatype="삭제">
          삭제
        </Button>
      </div>
    </div>
  );
};

export default Card;
