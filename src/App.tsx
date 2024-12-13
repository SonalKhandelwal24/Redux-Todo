import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <>
    <h1 className='font-bold lg:text-4xl md:text-2xl mt-10'>React Toolkit Todo List</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
