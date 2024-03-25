import clsx from 'clsx';
import { FunctionComponent } from 'react';

interface I_ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  type: 'submit' | 'reset' | 'button';
}

const Button: FunctionComponent<I_ButtonProps> = (props) => {
  const { type, className, children = '버튼', ...others } = props;
  return (
    <button type={type} className={clsx('border w-32 h-10 p-2', className)} {...others}>
      {children}
    </button>
  );
};

export default Button;
