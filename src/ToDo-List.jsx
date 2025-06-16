import React , { useState } from 'react';

function ToDoList(){
    // This is the ToDoList component that will manage the state of the to-do items
    // It will allow users to add, remove, and toggle the completion status of to-do items
    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ''){
        setTasks([...tasks, newTask]);
        setNewTask('');
        }

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i!== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =
            [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
        

    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
        

    }




    return(<div className="todo-list">
        <h1>To-Do-List</h1>
        {/* <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a new task"/>
        <button 
        className="add-task"
        onClick={addTask}>
            Add Task
        </button> */}

        
        <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="GOAL For Today - Press Enter to add"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    addTask();
                }
            }}/>
        <input
            type="button"
            value="Press Enter to add"
            className="add-task"/>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="delete-task"
                        onClick={() => deleteTask(index)}>
                        ❌ Delete
                    </button>
                    <button
                        className="move-up"
                        onClick={() => moveTaskUp(index)}
                        disabled={index === 0}>
                        ⬆️ Move Up
                    </button>
                    <button
                        className="move-down"
                        onClick={() => moveTaskDown(index)}
                        disabled={index === tasks.length - 1}>
                        ⬇️ Move Down   
                    </button>
                </li>
            )}
        </ol>
        
    </div>);
}

export default ToDoList;
