import Todo from '../Todo';

const DoneWork = () => {
  return (
    <div>
      <Todo.title className="text-2xl" level={2}>
        Done Work 🕶️
      </Todo.title>
      <Todo.list
        isDone={true}
        onClick={(e) => {
          console.log(e.target);
        }}
      />
    </div>
  );
};

export default DoneWork;
