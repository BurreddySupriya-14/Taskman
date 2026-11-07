export default function TaskStatus({
  statusFilter,
  setStatusFilter
}) {
  return (
    <div className="status-section">

      <label>View Tasks:</label>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All Tasks</option>
        <option value="pending">Pending Tasks</option>
        <option value="completed">Completed Tasks</option>
      </select>

    </div>
  );
}