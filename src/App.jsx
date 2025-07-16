import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/main/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { CartProvider } from "../src/components/store/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <Home />
      <Footer />
    </CartProvider>
  );
}

export default App;
