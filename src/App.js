import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import "./styles/App.scss";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutUs";
import Logement from "./pages/Logement";
import Error404 from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Navigate replace to="/accueil" />} />
              <Route path="/accueil" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/logement/:id" element={<Logement/>} />
              <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
      </BrowserRouter>

  );
}

export default App;
