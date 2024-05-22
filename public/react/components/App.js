import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from "./Books"
import BookDetails from "./BookDetails"
import BookDetailCard from './BookDetailCard'

function App () {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Books />} />
                    <Route path="/books/:id" element={<BookDetails />} />
            </Routes>
            </BrowserRouter>
        </>
    )
	
}

export default App