// import listaLivros from "../data/Livros.json"
import CardLivro from "./CardLivro"
import { useState, useEffect } from "react"
import LivroService from '../service/LivroService'



export default function ListCardLivros() {
    const [listaLivros, setListaLivros] = useState([]);

    useEffect(() => {
        LivroService.listarLivros().then((livros) =>{
            console.log(livros);
            setListaLivros(livros);
            
        }); 
    }, []);

    return (
        listaLivros.map((livro) => 
            <CardLivro key={livro.id} livro={livro} />
        )    
    )
}