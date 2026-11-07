import React from 'react'
import { useState }  from 'react'

export default function Taskform({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('high');
    const[category, setCategory] = useState('general');
    
    const handlesubmit = (e) => {
        e.preventDefault();
        // Don't add empty tasks
        if(task.trim() === "") {
            alert("Please enter a task!");
            return;
        }
        addTask({text:task, priority, category, completed: false})
        //Reset State:
        setTask("");
        setPriority("high")
        setCategory("general")
    }
  return (
    <form onSubmit={handlesubmit} className="task-form">
        <div id='inp'>
            <input type="text" placeholder="Enter a Task" value={task} onChange={(e) => setTask(e.target.value)}></input>
            <span><button type="submit">Add Task</button></span>
            
        </div>

        <div id="btns">
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select value={category} onChange={(e) => setCategory(e.target.value)} >
                <option value="general">General</option>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
            </select>
        </div>
    </form>
  )
}