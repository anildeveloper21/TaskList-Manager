import React from 'react';

// eslint-disable-next-line react/prop-types
const TaskFilter = ({ filterTasks, filterStatus }) => {
  return (
    <div className="mt-4">
      <select
        value={filterStatus}
        onChange={(e) => filterTasks(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
