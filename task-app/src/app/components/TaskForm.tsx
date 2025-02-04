"use client"

import {ChangeEvent, FormEvent, useState} from 'react'

type TaskFormProps ={
    addTask : (p1:string) => void
}
export const TaskForm:React.FC<TaskFormProps> = ({addTask}) => {
     const [task,setTask]  = useState<string>("");
     const HandleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        setTask(event.target.value);
     }
     const handleSubmit = (event:FormEvent)=>{
          event.preventDefault();
          if(task!=="")
          {
             addTask(task);
          }
     }
  return (
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
  )
}


