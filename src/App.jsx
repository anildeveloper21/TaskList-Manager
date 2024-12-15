// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskTable from './TaskTable';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [taskIdCounter, setTaskIdCounter] = useState(21);

  useEffect(() => {
    // Fetching data from the API
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(response => {
        const tasksData = response.data.map(task => ({
          ...task,
          status: task.completed ? 'Done' : 'To Do',
        }));
        setTasks(tasksData);
        setFilteredTasks(tasksData);
      });
  }, []);

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: taskIdCounter };
    setTasks([...tasks, taskWithId]);
    setFilteredTasks([...tasks, taskWithId]);
    setTaskIdCounter(taskIdCounter + 1); 
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const remainingTasks = tasks.filter(task => task.id !== taskId);
    setTasks(remainingTasks);
    setFilteredTasks(remainingTasks);
  };

  const filterTasks = (status) => {
    setFilterStatus(status);
    if (status === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.status === status));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Task List Manager</h1>
      
      <TaskForm addTask={addTask} taskIdCounter={taskIdCounter} />
      
      <TaskFilter filterTasks={filterTasks} filterStatus={filterStatus} />
      
      <TaskTable tasks={filteredTasks} editTask={editTask} deleteTask={deleteTask} />
      
      <ToastContainer />
    </div>
  );
};

export default App;
