import './App.css';
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pages/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
