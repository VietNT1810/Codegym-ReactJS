import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from "../src/components/User"
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/user/add" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
