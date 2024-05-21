import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Add from "./Pages/Add";
import Basket from "./Pages/Basket";
import Wishlist from "./Pages/Wishlist";
import Detail from "./Pages/Detail";
import Layout from "./Layout/Layout";
import MainProvider from "./context/MainProvider";

function App() {

  return (
    <>
    <MainProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="admin" element={<Admin />} />
          <Route path="add" element={<Add />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
