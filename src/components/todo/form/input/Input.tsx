import { ComponentPropsWithoutRef, FunctionComponent } from 'react';

interface I_InputProps extends ComponentPropsWithoutRef<'input'> {}
const Input: FunctionComponent<I_InputProps> = (props) => {
  const { type = 'text', className, title, ...others } = props;
  return (
    <label>
      {title}
      <input type={type} className={className} {...others} />
    </label>
  );
};

export default Input;
