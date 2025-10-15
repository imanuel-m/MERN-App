import TaskList from "./components/TaskList";
import axios from "axios";
import { useEffect, useState } from "react";
import { AppContext } from "./hooks/useApp";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/tasks`
        );
        setTasks(res.data.tasks);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(form);
    e.currentTarget.reset();
    try {
      const task = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/v1/tasks`,
        formObject
      );
      const newTasks = [...tasks, task.data.task];
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider value={{ tasks, setTasks }}>
      <div className="bg-indigo-700 h-screen text-white">
        <h1 className="text-center font-bold text-5xl pt-14">Task Manager</h1>
        <form className="text-2xl text-center mt-9" onSubmit={handleSubmit}>
          <input
            className="bg-indigo-900 p-2 w-sm rounded-tl-sm rounded-bl-sm h-14"
            type="text"
            name="name"
            placeholder="e.g. walk the dog"
          />
          <button
            className="bg-orange-400 text-white px-7 h-14 rounded-tr-sm rounded-br-sm hover:bg-orange-500"
            type="submit"
          >
            Add
          </button>
        </form>
        <TaskList tasks={tasks} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
