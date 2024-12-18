import { Route, Routes } from "react-router-dom";
import App from "./App";
import FormEditLivro from "./components/FormEditLivro";
import FormLivros from "./components/FormLivros";
import Home from "./components/Home";
import ListCardLivro from "./components/ListCardLivro";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/lista" element={<ListCardLivro />} />
                <Route path="/cadastro" element={<FormLivros />} />
                <Route path="/edit/:id" element={<FormEditLivro />} />
            </Route>
        </Routes>
    );
}
