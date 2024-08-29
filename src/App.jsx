import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeadingOfTodo from './components/HeadingOfTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <HeadingOfTodo/>
    <Todo/>
    </>
  )
}

export default App
