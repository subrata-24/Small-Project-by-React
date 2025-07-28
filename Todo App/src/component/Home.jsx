import React,{useState} from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid';

const dummyData = []

const Home = () => {

  const [todo, setTodo] = useState(dummyData)
  
  function getNewTodo(newTodo) {
    setTodo([...todo,{id:uuidv4(), ...newTodo}])
  }

  const handleRemoveTodo = (id) => {
    
    setTodo((oldTodo) => {
      const filteredTodo = oldTodo.filter((todo) => todo.id !== id);
      return filteredTodo
    })
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-6 text-center">📝 My Todo List</h1>
              <NewTodo onTodo={getNewTodo}/>
              <div className="bg-gray-800 rounded-xl shadow-md p-6 mt-2">
          <Todos todo={todo} onRemoveTodo={handleRemoveTodo} />
        </div>
      </div>
    </div>
  )
}

export default Home
