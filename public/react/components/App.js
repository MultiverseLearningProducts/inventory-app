import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Books";
import BookDetails from "./BookDetails";
import BookDetailCard from "./BookDetailCard";
import CreateBookForm from "./CreateBookForm";
import EditBookForm from "./EditBookForm";
import HomePage from "./Homepage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />}/>
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/new-book" element={<CreateBookForm />} />
          <Route path={`/edit-book/:id`} element={<EditBookForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
