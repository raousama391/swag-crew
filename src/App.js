import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/home-page.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SigninSignuo from './pages/auth/sign-in-sign-up'
//import {  getAuth } from "firebase/auth";

function App() {
  return (
    <div>
      <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/auth" element={<SigninSignuo />} />
          </Routes>

    </div>
  );
}

export default App;
