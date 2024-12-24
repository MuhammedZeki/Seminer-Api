import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [todos,setTodos]=useState([])
  const [user,setUser]=useState("")
  const getAllTodos=async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setTodos(response.data)
  }
  const userTodo=async(userId)=>{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    setTodos(res.data)
  }
  useEffect(()=>{
    // getAllTodos()
  },[])
  return (
    
    <div>
      <div>
      <h1>Todos</h1>
      {/* {
        todos?.map((todo)=>(
          <p>{todo.id}-{todo.title}-{todo.completed ? "Tamamlandı" : "Tamamlanmadı"}</p>
        ))
      } */}
      </div>
      <div>
        <label htmlFor="" style={{marginRight:10}}>UserId Giriniz</label>
        <input 
          type="number"
          style={{marginRight:10}}
          min={1}
          max={10}
          value={user}
          onChange={(e)=>setUser(e.target.value)}
        />
        <button type='submit' onClick={()=>userTodo(user)}>Todolar Getir</button>
      </div>
      <div>
        {
          todos?.map((todo)=>(
            <p>{todo.id}-{todo.title}-{todo.completed ? "Tamamlandı" : "Tamamlanmadı"}</p>
          ))
        }
      </div>
    </div>
  )
}

export default App
