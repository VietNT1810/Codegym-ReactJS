import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/Employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
