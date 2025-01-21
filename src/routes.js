import Cabecalho from "components/Cabecalho";
import NovoVideo from "components/NovoVideo";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/NovoVideo" element={<NovoVideo />}></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;