export default function Progresstracker({ tasks }) {

  const completedTasks = tasks.filter(
    (task) => task.completed === true
  ).length;

  const totalTasks = tasks.length;

  const percentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-tracker">

      <h3>Progress Tracker</h3>

      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <h2>{percentage}%</h2>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

    </div>
  );
}