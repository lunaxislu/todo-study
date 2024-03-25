import Todo from '../Todo';

const ToWork = () => {
  return (
    <div className="mt-14">
      <Todo.title className="text-2xl" level={2}>
        To Work 📣
      </Todo.title>
      <Todo.list
        isDone={false}
        onClick={(e) => {
          console.log(e.target);
        }}
      />
    </div>
  );
};

export default ToWork;
