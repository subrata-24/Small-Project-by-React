import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook } from './booksSlice'
import { Link } from 'react-router-dom'

const ShowBooks = () => {
  const books = useSelector((state) => state.bookReducer.books)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Your Library</h1>
          <Link to="/add-book" className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            + Add Book
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books && books.length ? (
            books.map((book) => {
              const { id, name, Author } = book
              return (
                <article key={id} className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                      <p className="text-sm text-gray-500 mt-1">by {Author}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <Link to="/edit-book" state={{ id, name, Author }} className="inline-flex items-center px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-md text-sm hover:bg-yellow-200">Edit</Link>
                      <button onClick={() => handleDelete(id)} className="inline-flex items-center px-3 py-1.5 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200">Delete</button>
                    </div>
                  </div>
                </article>
              )
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No books found. Add your first book.</p>
              <Link to="/add-book" className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">Add a Book</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShowBooks