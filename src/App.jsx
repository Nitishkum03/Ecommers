import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import ProductGrid from "./component/ProductGrid"
import All from "./component/All"
import ProductPage from "./component/ProductPage";
import ErrorPage from "./component/ErrorPage";
import ShippingReturnPolicy from "./component/ShippingReturnPolicy";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <div className="bg-[#100f0f]">
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<ProductGrid search={search} />} />
          <Route path="/all" element={<All search={search} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shipping-return-policy" element={<ShippingReturnPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

