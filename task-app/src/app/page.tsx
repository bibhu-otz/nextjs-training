// import Image from "next/image";
// import styles from "./page.module.css";
"use client"
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {

  const [tasks,setTasks] = useState<string[]>([]);
  const [task,setTask]  = useState<string>("");
  const HandleChange =(event:ChangeEvent<HTMLInputElement>)=>{
    setTask(event.target.value);
 }

  const handleSubmit = (event:FormEvent)=>{
    event.preventDefault();
    if(task!=="")
    {
      setTasks((prev)=>[...prev,task]);
      console.log(tasks);
      setTask('');
    }
  }
  const handleDelete =(index:number)=>{
         setTasks((prev)=>prev.filter((_,i)=> i !== index))
  }
  return (
     <>
        <div className="container">
            <div className="row d-flex">
                 <div className="m-3 col-8">
                    {/* <TaskForm addTask={addTask}/> */}
                    <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Task"
                      onChange={(e)=>HandleChange(e)}
                      value={task}
                    />
                    <button type="submit" className="btn btn-success mt-3">ADD</button>
                    </form>
                 </div>
            </div>
            <div className="row">
                <div className="col-5 mt-3">
                     <ul className="list-group">
                      {
                        tasks.length === 0 ?
                        <li className="list-group-item">No task there</li> :
                       
                         tasks.map((t,index)=>
                          <li key={index} className="list-group-item m-2">
                            {t}
                            <span>
                              <button className="btn btn-sm btn-danger float-end" onClick={()=>handleDelete(index)}>Delete</button>
                            </span>
                          </li>
                        )
                       }
                     </ul>
                </div>
            </div>
        </div>
     </>
  );
}
