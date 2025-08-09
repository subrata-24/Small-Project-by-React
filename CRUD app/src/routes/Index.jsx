import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layouts/Navbar'
import ShowBooks from '../features/books/ShowBooks'
import AddBook from '../features/books/AddBook'
import EditBook from '../features/books/EditBook'

const Index = () => {
  return (
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/show-book' element = {<ShowBooks/>}/>
              <Route path='/add-book' element={<AddBook />} />
              <Route path='/edit-book' element={<EditBook/>}/>
              <Route path='*' element = {<Error/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default Index
