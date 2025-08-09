import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
    books: [
        { id: uuidv4(), name: "Dopamin Detox", Author: "Thibo Meris" },
        { id: uuidv4(), name: "Computer Programming", Author: "Tamim Shariar Subin" }
        
    ]
}

export const booksSlice = createSlice({
    name: "book",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, name, author } = action.payload
            const isBookExist = state.books.filter((book) => book.id === id)
            if (isBookExist) {
                isBookExist[0].name = name;
                isBookExist[0].Author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter((book)=>book.id != id)
        }
    }
})

export const { showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;

export default booksSlice.reducer