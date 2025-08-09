import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './booksSlice'

const EditBook = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    if (location.state) {
      setId(location.state.id)
      setName(location.state.name)
      setAuthor(location.state.Author)
    } else {
      navigate('/show-book', { replace: true })
    }
  }, [location, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !author.trim()) return
    dispatch(updateBook({ id, name: name.trim(), author: author.trim() }))
    navigate('/show-book', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-start justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Book</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700">Update Book</button>
            <button type="button" onClick={() => navigate('/show-book', { replace: true })} className="px-4 py-2 bg-gray-100 rounded-lg">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBook