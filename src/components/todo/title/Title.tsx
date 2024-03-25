import clsx from 'clsx';
import { FunctionComponent } from 'react';

interface I_PropsType {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children?: string;
}

const Title: FunctionComponent<I_PropsType> = ({ className, children = 'TodoList', level }) => {
  const Tag = `h${level}` as const;
  return <Tag className={clsx(' font-bold', className)}>{children}</Tag>;
};

export default Title;
