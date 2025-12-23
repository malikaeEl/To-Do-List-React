
import {useState} from 'react'
export default function Todolist(){
    const [tasks,setTasks]=useState(["eatlunch","walk dog","meet friend"]);
    const [newtask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
         
    }
    function addTask(){
        if(newtask.trim() !==""){
        setTasks(t=>[...t,newtask]);
        setNewTask("");
    }else{
        alert("Enter the task")
    }

        
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=> i !== index);
        setTasks(updatedTasks);

    }
    function moveUpTask(index){
        if(index >0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index - 1]]=
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveDownTask(index){
        if(index < tasks.length - 1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index + 1]]=
            [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);

        }}

    return(
    <>
    <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
            <input type="text"  placeholder="Enter task ..." value={newtask} onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>Add</button>

        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className="delete-task" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-task" onClick={()=>moveUpTask(index)}>&#128070; </button>
                <button className="move-task" onClick={()=>moveDownTask(index)}>&#128071; </button> 
            </li>
            )}

        </ol>


    </div>
    </>)
    }


