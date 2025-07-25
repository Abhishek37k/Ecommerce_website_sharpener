import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Store from "./components/Store";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About"; 
import { CartProvider } from "./components/store/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
