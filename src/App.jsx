import "./App.css";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Card } from "./components/Card";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/inicio" element={<ItemListContainer />} />
                <Route path="/semillas" element="" />
                <Route path="*" element={<><p>Error 404. Pagina no encontrada.</p></>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
