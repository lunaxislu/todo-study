import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/config/configStore';
import { addTodo } from '../../../store/module/todoSlice';
import Button from '../button/Button';

const Form = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [error, setError] = useState<{
    title_error: string;
    text_error: string;
  }>({
    title_error: '',
    text_error: ''
  });
  const submitHanlder = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget['todo_title'];
    const text = e.currentTarget['todo_text'];
    setError({
      title_error: '',
      text_error: ''
    });

    if (title.value.length === 0) return setError((pre) => ({ ...pre, title_error: 'plz fill in the details' }));

    if (text.value.length === 0)
      return setError((pre) => ({
        ...pre,
        text_error: 'plz fill in the details'
      }));

    // id 생성
    const id = Date.now().toString();
    dispatch(
      addTodo({
        id,
        title: title.value,
        text: text.value,
        isDone: false
      })
    );
    (title.value = ''), (text.value = '');
  };

  return (
    <form onSubmit={submitHanlder} className="flex gap-14 items-center border border-yellow-300 py-4 px-6">
      <div className="flex gap-8">
        <label className="font-semibold">
          제목
          <input type="text" name="todo_title" className="border-b-2 ml-4 pl-2 font-normal" />
        </label>
        {error?.title_error && <div className="text-red-700">{error.title_error}</div>}
        <label className="font-semibold">
          할 일
          <input type="text" name="todo_text" className="border-b-2 pl-2 ml-4 font-normal" />
        </label>
        {error?.text_error && <div className="text-red-700">{error?.text_error}</div>}
      </div>
      <Button className="hover:transition-all  hover:text-white hover:bg-black" type="submit" />
    </form>
  );
};

export default Form;
