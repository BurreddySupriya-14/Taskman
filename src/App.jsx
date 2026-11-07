import Taskform from './components/Taskform'
import TaskList from './components/TaskList'
import Progresstrcaker from './components/Progresstrcaker'
import Filters from './components/Filters'
import TaskStatus from './components/TaskStatus'
import { useEffect, useState } from "react"
import './App.css'


export default function App() {

  const [tasks, setTasks] = useState([]);

  const [sortType, setSortType] = useState("default");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const clearTasks = () => {
    setTasks([]);
  }

const filteredTasks = tasks.filter((task) => {

  if (statusFilter === "pending") {
    return task.completed === false;
  }

  if (statusFilter === "completed") {
    return task.completed === true;
  }

  return true;
});

const sortedTasks = [...filteredTasks].sort((a, b) => {

  if (sortType === "priority-high") {

    const priorityOrder = {
      high: 1,
      medium: 2,
      low: 3
    };

    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }

  if (sortType === "priority-low") {

    const priorityOrder = {
      high: 3,
      medium: 2,
      low: 1
    };

    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }

  if (sortType === "category") {
    return a.category.localeCompare(b.category);
  }

  return 0;
});

  return (
    <div>

      <h1>TaskMan</h1>

      <p>
        <i>Friendly Task Manager !</i>
      </p>

      <Taskform addTask={addTask} />

      <Filters
  sortType={sortType}
  setSortType={setSortType}
/>

      <TaskStatus
  statusFilter={statusFilter}
  setStatusFilter={setStatusFilter}
/>

      <TaskList
        tasks={sortedTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <Progresstrcaker tasks={tasks} />

      {tasks.length > 0 && (
        <button
          className='clear-btn'
          onClick={clearTasks}
        >
          Clear All Tasks
        </button>
      )}

    </div>
  )
}