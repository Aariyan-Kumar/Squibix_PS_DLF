import React, { useEffect, useState } from 'react';
import './index.css'
import Navbar from './Components/Navbar';
import { v4 as uuidv4 } from 'uuid';

const getItemsLS = () => {
  let savedTodos = localStorage.getItem("todos");
  if (savedTodos !== null) {
    let todos = JSON.parse(savedTodos)
    return todos;
  }
  else {
    return [];
  }
}

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(getItemsLS())



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  const handeleEdit = (e, id) => {
    let todo = todos.filter(item => item.id === id);
    setTodo(todo[0].todo);
    handeleDelete(e, id);
  }

  const handeleDelete = (e, id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handeleAdd = () => {
    if (todo.trim() === "") return;
    setTodos(prevTodos => [...prevTodos, { id: uuidv4(), todo: todo, isCompleted: false }]);
    setTodo("");
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => {
    const id = e.target.name;
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  }


  return (
    <>
      <Navbar />
      <div className='max-w-5xl bg-purple-200 mx-auto my-16 rounded-md px-5 py-2' style={{ minHeight: '70vh' }}>
        <h1 className='text-2xl font-bold text-center'>Your Todos List</h1>
        <div className="addatodo my-2">
          <h2 className='text-xl font-medium mx-3 my-4'>Add Your Todo</h2>
          <div className='flex flex-nowrap justify-evenly'>
            <input
              type="text"
              className='w-11/12 p-2 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'
              onChange={handleChange}
              value={todo}
              required
            />
            <button className='px-4 py-1 rounded-md text-sm font-medium cursor-pointer hover:bg-green-600 hover:text-white transition shadow-md' onClick={() => { handeleAdd() }} style={{ border: '2px solid #4B0082' }} >Save</button>
          </div>
        </div>
        <h2 className='text-xl font-medium mx-3 my-4'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='mx-3 my-2 text-lg text-center'>No Todos to display</div>}
          {todos.map((item) => {

            return (
              <>
                <div key={item.id} className="todo mx-3 my-2 flex flex-nowrap justify-between">
                  <div className='flex gap-8'>
                    <input
                      name={item.id}
                      id=""
                      onChange={handleCheckbox}
                      type="checkbox" value={item.isCompleted}
                      className='h-5 w-5 bg-green-800 border-gray-300 rounded focus:ring-green-800'
                      checked = {item.isCompleted ? true : false}
                    />
                    <div className={item.isCompleted ? "line-through" : ""} style={{ display: 'flex', fontSize: '17px' }}>{item.todo}
                    </div>
                  </div>
                  <div className="buttons" style={{ minWidth: '200px' }}>
                    <button className=' mx-2 px-4 py-1 rounded-md text-sm font-medium cursor-pointer hover:bg-yellow-400 hover:text-white transition' onClick={(e) => { handeleEdit(e, item.id) }} style={{ border: '2px solid #4B0082' }}>Edit</button>
                    <button className='mx-2 px-4 py-1 rounded-md text-sm font-medium cursor-pointer hover:bg-red-600 hover:text-white transition' onClick={(e) => { handeleDelete(e, item.id) }} style={{ border: '2px solid #4B0082' }}>Delete</button>
                  </div>
                </div>
              </>)

          })}
        </div>
      </div>
    </>
  )
}

export default App
