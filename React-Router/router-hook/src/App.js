import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Category />} />
        <Route path="/product/:categoryID" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
