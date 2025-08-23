import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Store from "./components/Store";
import Contact_US from "./components/Contact_US";
import Login from "./components/Login";
import Footer from "./components/Footer/Footer";
import { AuthContextProvider } from "./components/store/Auth-context";
import About from "./components/About/About";
import { CartProvider } from "./components/store/CartContext";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contact_US />} />
            <Route path="/store/:type/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
