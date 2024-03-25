import { clsx } from 'clsx';
import DoneWork from './done_work/DoneWork';
import Form from './form/Form';
import List from './list/List';
import Title from './title/Title';
import ToWork from './to_work/TodoWork';
interface I_TodoProps extends React.ComponentPropsWithoutRef<'div'> {}
const Todo = (props: I_TodoProps) => {
  const { className, children, ...others } = props;

  return (
    <div className={clsx('max-w-screen-xl my-0 mx-auto min-h-screen md:px-28 xl:px-0', className)} {...others}>
      {children}
    </div>
  );
};
Todo.title = Title;
Todo.form = Form;
Todo.list = List;
Todo.to_work = ToWork;
Todo.done_work = DoneWork;
export default Todo;
