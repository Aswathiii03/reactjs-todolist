import { useState } from "react"


export default function TodoInput(props) {
  const {handleAddTodos,todoValue,setTodovale}=props
  
  return (
    <header>
        <input value={todoValue} onChange={(e)=> {setTodovale(e.target.value)}} placeholder="Enter to do....."/>
        <button onClick={()=>{
          handleAddTodos(todoValue)
          setTodovale('')
        }}>Add</button>
    </header>
  )
}
