import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo(props){

  const { title, desc, id } = props.todo;

  const handleClick = (id) => {
    props.onRemoveTodo(id)
  }

  return (
    <article className="flex justify-between items-center bg-gray-700 px-5 py-4 rounded-lg shadow hover:shadow-lg transition">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-300">{desc}</p>
      </div>
      <button
        className="text-red-400 hover:text-red-600 transition duration-200"
        title="Delete"
        onClick={() => {
          {handleClick(id)}
        }}
      >
        <FontAwesomeIcon icon={faTrash} size="lg" />
      </button>
    </article>
  )
}

export default Todo
