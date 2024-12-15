import React, { useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line no-unused-vars
const TaskForm = ({ addTask, taskIdCounter }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      toast.error('Please enter a title!');
      return;
    }
    
    const newTask = {
      title,
      description,
      status: 'To Do',
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    
    toast.success('New task added successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
