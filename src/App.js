import {Routes, Route, HashRouter, Navigate} from "react-router-dom";
import "./styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/about";
import Logement from "./pages/Logement";
import Error404 from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
      <HashRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Navigate replace to="/accueil" />} />
              <Route path="/accueil" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<Logement/>} />
              <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
      </HashRouter>

  );
}

export default App;
