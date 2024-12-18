import { Outlet } from "react-router-dom"
import Menu from "./components/Menu";
// import Home from "./components/Home";
// import ListCardLivro from "./components/ListCardLivro";
// import FormLivros from "./components/FormLivros";
import Carroussel from "./components/Carroussel";
// import FormEditLivros from "./components/FormEditLivro";

function App() {

    return (
      <>
        <Menu></Menu>
        <main>
          <div className="w3-container w3-padding-16 w3-margin-top">
            <h1>Minha Livraria</h1>
          </div>
          <Carroussel />
          <div className="w3-row w3-container w3-margin-top">
            {/* <ListCardLivro></ListCardLivro>
            <FormLivros></FormLivros>
            <Home></Home> */}
            <Outlet></Outlet>
          </div>
        </main>
  
        <footer className="w3-container w3-margin-top w3-black ">
          <p className="w3-center">Realizado por Taiza Reis (imagens retiradas de cultura.com.br)</p>
        </footer>
  
      </>
    )
  }
  
  export default App
