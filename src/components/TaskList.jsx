export default function Tasklist({
  tasks,
  updateTask,
  deleteTask
}) {

  const toggleComplete = (index) => {

    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed
    };

    updateTask(updatedTask, index);
  };

  const editTask = (index) => {

    const newText = prompt(
      "Edit your task:",
      tasks[index].text
    );

    if (newText === null) {
      return;
    }

    if (newText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    const updatedTask = {
      ...tasks[index],
      text: newText
    };

    updateTask(updatedTask, index);
  };

  return (
    <ul className="task-list">

      {tasks.map((task, index) => (

        <li key={index}>

          <div>

            <span
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </span>

            <small>
              {task.priority} | {task.category}
            </small>

          </div>

          <div>

            <button
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => editTask(index)}
              className="edit-btn"
            >
              Edit
            </button>

            <button
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

          </div>

        </li>

      ))}

    </ul>
  );
}