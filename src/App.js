import './App.css';

import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Main from './components/Main/Main';

function App() {
  const [isAuth, setIsAuth] = useState(false)
    const logInfo = JSON.parse(localStorage.getItem("logInfo")) || []

    useEffect(() => {
        logInfo.users.forEach((user) => {
            if (user.isAuth) {
                setIsAuth(true)
            }
        })
    }, [])

  const [todo,setTodo] = useState([{
    id:1,
    status: true,
    name: "First list",
    type: "work"
  },
  {
    id:2,
    status: true,
    name: "Second list",
    type: "work"
  },
  {
    id:3,
    status: true,
    name: "Third list",
    type: "work"
  },])

  const [time, setTime] = useState("00:00:00")
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main
      todo={todo} setTodo={setTodo}/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/signIn' element={<SignIn setIsAuth={setIsAuth}/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
