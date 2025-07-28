import React from 'react'
import Todo from './Todo'

function Todos(props) {
  return (
    <section className="space-y-4">
      {props.todo.map((item) => (
        <Todo key={item.id} todo={item} onRemoveTodo={props.onRemoveTodo} />
      ))}
    </section>
  )
}

export default Todos
