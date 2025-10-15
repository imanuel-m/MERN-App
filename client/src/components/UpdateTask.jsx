import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, completed } = location.state;
  const [taskName, setTaskName] = useState(name);
  const [taskCompleted, setTaskCompleted] = useState(completed);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(form);

    formObj.completed = form.get("completed") === "on";

    try {
      await axios.patch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/tasks/${id}`,
        formObj
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      className="text-xl bg-indigo-700 h-screen flex flex-col gap-10 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-white text-center font-bold text-5xl pt-14">
        Update Task
      </h1>
      <div className="gap-2 p-20 rounded-md bg-indigo-900 text-white grid grid-cols-1 grid-rows-3">
        <div>
          <label className="me-2" htmlFor="task-name">
            Name:
          </label>
          <input
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            id="task-name"
            type="text"
            name="name"
            className="text-black bg-indigo-200 p-2 rounded-sm"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="task-completed" className="me-4">
            Completed:
          </label>
          <input
            checked={taskCompleted}
            onChange={(e) => setTaskCompleted(e.target.checked)}
            className="w-6 h-6"
            id="task-completed"
            type="checkbox"
            name="completed"
          />
        </div>
        <button
          className="bg-indigo-500 hover:bg-indigo-600 rounded-sm h-14 flex
        items-center justify-center"
          type="submit"
        >
          Edit
        </button>
      </div>
    </form>
  );
};

export default UpdateTask;
