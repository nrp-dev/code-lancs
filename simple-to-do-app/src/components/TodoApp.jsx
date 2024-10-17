import { useState } from "react";


export default function TodoApp() {

    const [tasks, setTasks] = useState([]); //List of Tasks
    const [newTask, setNewTask] = useState(''); // Single Task

    const handleAddTask = (e) => {
        e.preventDefault();

        let newTaskItem = ""; // temp holder for constructing task object

        try {
          if (newTask.trim() === '') {
            throw new Error('Task cannot be empty');
          }
          newTaskItem = {
            id: Math.round((Math.random() *1000)),
            text: newTask,
            completed: false,
            
          }
          console.log(newTaskItem)

          setTasks([...tasks, newTaskItem]);
          setNewTask('');
        } catch (error) {
          alert(error.message);
        }
      }

    const handleDeleteTask = (taskId) => {
        try {
          const updatedTasks = tasks.filter((task) => task.id !== taskId);
          setTasks(updatedTasks);
        } catch (error) {
          alert('An error occurred while deleting the task.');
        }
      }


      const handleToggleTask = (taskId) => {
        try {
          const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          );
          setTasks(updatedTasks);
        } catch (error) {
          alert('An error occurred while updating the task.');
        }
      }
    
    return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTask} className="todo-form">
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task" 
          className="todo-input"
          size={35}
        />
        <button type="submit" className="add-btn">Add</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

      



      

