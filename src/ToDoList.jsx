
import {useState} from 'react'
export default function Todolist(){
    const [task,setTasks]=useState([]);
    const [newtask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
         
    }
    function addTask(){
        
    }
    function deleteTask(){

    }
    function moveUpTask(index){

    }
    function moveDownTsk(index){

    }

    return(
    <>
    <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
            <input type="text" value={newtask} onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>Add</button>
        </div>

    </div>
    </>)
    }


