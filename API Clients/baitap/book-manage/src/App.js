import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Book from "./components/Book"
import BookDetail from "./components/BookDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/books/add" element={<BookDetail />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
