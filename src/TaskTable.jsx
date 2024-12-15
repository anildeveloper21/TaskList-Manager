import React from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const TaskTable = ({ tasks, editTask, deleteTask }) => {

  const handleEdit = (taskId, field, value) => {
    editTask(taskId, { [field]: value });
    toast.success('Task updated successfully!');
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
    toast.success('Task deleted successfully!');
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border text-left">Task ID</th>
            <th className="px-4 py-2 border text-left">Title</th>
            <th className="px-4 py-2 border text-left">Description</th>
            <th className="px-4 py-2 border text-left">Status</th>
            <th className="px-4 py-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td className="border px-4 py-2">{task.id}</td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => handleEdit(task.id, 'title', e.target.value)}
                  className="border p-1 rounded w-full"
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={task.description || ''}
                  onChange={(e) => handleEdit(task.id, 'description', e.target.value)}
                  className="border p-1 rounded w-full"
                />
              </td>
              <td className="border px-4 py-2">
                <select
                  value={task.status}
                  onChange={(e) => handleEdit(task.id, 'status', e.target.value)}
                  className="border p-1 rounded w-full"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded w-full mt-2 sm:mt-0"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
