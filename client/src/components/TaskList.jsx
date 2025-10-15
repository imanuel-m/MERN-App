import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center mt-9">
      {tasks.map((task) => {
        return (
          <Task
            key={task._id}
            id={task._id}
            name={task.name}
            completed={task.completed}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
