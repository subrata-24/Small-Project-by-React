import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from './booksSlice'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !author.trim()) return
    const book = { id: uuidv4(), name: title.trim(), Author: author.trim() }
    dispatch(addBook(book))
    navigate('/show-book', { replace: true })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-start justify-center p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Book</h2>
        <p className="text-sm text-gray-500 mb-6">Add a new book to your collection — keep titles concise and authors' names correct.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
              placeholder="Enter book title"
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
              placeholder="Author name"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Add Book
            </button>

            <button
              type="button"
              onClick={() => { setTitle(''); setAuthor('') }}
              className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook