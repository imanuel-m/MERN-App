import { Link } from "react-router-dom";
import axios from "axios";
import { useApp } from "../hooks/useApp";

const Task = ({ name, completed, id }) => {
  const { tasks, setTasks } = useApp();
  const deleteTask = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/tasks/${id}`
      );
      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="grid grid-rows-2 grid-cols-[3fr_1fr] text-center p-4 w-md rounded-md text-xl bg-indigo-900 gap-2 last:mb-16">
      {completed ? (
        <p className="row-span-2 col-span-1 flex items-center justify-center line-through">
          {name}
        </p>
      ) : (
        <p className="row-span-2 col-span-1 flex items-center justify-center">
          {name}
        </p>
      )}
      <Link
        className="bg-indigo-500 h-10 rounded-sm hover:bg-indigo-600 flex items-center justify-center"
        to="/update"
        state={{ id, name, completed }}
      >
        <button>Edit</button>
      </Link>
      <button
        onClick={deleteTask}
        className="bg-indigo-500 h-10 rounded-sm hover:bg-indigo-600"
      >
        Remove
      </button>
    </div>
  );
};

export default Task;
