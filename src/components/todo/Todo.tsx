import { clsx } from 'clsx';
interface I_TodoProps extends React.ComponentPropsWithoutRef<'div'> {}
const Todo = (props: I_TodoProps) => {
  const { className, children, ...others } = props;

  return (
    <div className={clsx('max-w-screen-xl my-0 mx-auto min-h-screen md:px-28 xl:px-0', className)} {...others}>
      {children}
    </div>
  );
};

export default Todo;
