import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import CategoriePage from "./pages/CategoriePage";
import Home from "../src/pages/Home";
import Recherche from "./pages/Recherche";
import Footer from "../src/components/Footer";
import Construction from "../src/pages/Construction";
import FicheArtisan from "../src/pages/FicheArtisan";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categoriepage" element={<CategoriePage />}></Route>
        <Route path="/par-categorie/:categorie" element={<Recherche />}></Route>
        <Route path="/ficheartisan/:id" element={<FicheArtisan />}></Route>
        <Route path="/construction" element={<Construction />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
