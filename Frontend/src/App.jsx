import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EditBook from "./Pages/EditBook";
import DeleteBook from "./Pages/DeleteBook";
import ShowBooks from "./Pages/ShowBooks";
import CreateBook from "./Pages/CreateBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/details/:id" element={<ShowBooks />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
