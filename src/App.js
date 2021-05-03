import React from 'react';
import { useState } from 'react';
import Header from "./components/Header.js";
import Tasks from './components/Tasks.js';
import AddTask from './components/AddTask.js';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appoinment',
      day: 'Feb 5th 2:30pm',
      reminder: true 
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 4,
      text: 'Cleaning the House',
      day: 'Feb 8th at 8:00am',
      reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder }: task
      )
    )
  }

  return (
    <div className='container'>
    <Header
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
    />
    {showAddTask && <AddTask addTask={addTask}/>}
    {
      tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
      :
      ('Hurray! no more tasks') 
    }
    </div>
  );
}

export default App;
