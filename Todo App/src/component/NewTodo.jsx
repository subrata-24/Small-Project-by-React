import React,{useState} from 'react'

const NewTodo = (props) => {
  const [info, setInfo] = useState({ title: '', desc: '' })
  const { title, desc } = info;
    

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })     
  }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
      props.onTodo(info);
      setInfo({ title: "", desc: "" })
  }
    
  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl shadow-md p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="mb-2 text-white font-semibold"
        >
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Enter todo title"
          className="rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:outline-none focus:border-indigo-500 transition"
          required
          onChange={handleChange}        
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="desc"
          className="mb-2 text-white font-semibold"
        >
          Description:
        </label>
        <textarea
          name="desc"
          id="desc"
          value={desc}
          placeholder="Enter todo description"
          rows="4"
          className="rounded-md border border-gray-600 bg-gray-900 px-4 py-2 text-white resize-none focus:outline-none focus:border-indigo-500 transition"
          required
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodo
