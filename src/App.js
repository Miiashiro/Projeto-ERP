import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bills from "./Pages/Bills/billsToPlay";
import Home from "./Pages/Home/home";
import Product from "./Pages/Product/product";
import Login from "./Pages/Start/login";
import Registration from "./Pages/Start/registration";
import Fornecedor from "./Pages/Supllier/supllier";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Registration/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Produto" element={<Product/>} />
        <Route path="/Fornecedor" element={<Fornecedor />} />
        <Route path="/Contas" element={<Bills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
