export default function Filters({
  sortType,
  setSortType
}) {
  return (
    <div className="filter-section">

      <label>Sort Tasks: </label>

      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="default">Default Order</option>
        <option value="priority-high">Priority: High to Low</option>
        <option value="priority-low">Priority: Low to High</option>
        <option value="category">Category: A to Z</option>
      </select>

    </div>
  );
}