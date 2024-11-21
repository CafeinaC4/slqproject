import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState("")
  const handleClick = async (e) => {
    setUsername(e.target.value)
    console.log({username})
  }
  const handleChange = async (e) => {
    setUsername(e.target.value)
  }


  return (
    <>
    <div>

      <input type = 'text' placeholder='Nome' value={username} onChange = {handleChange}/>
      <button onClick = {handleClick}>Cadastrar</button>

    </div>
    </>
  )
}

export default App
