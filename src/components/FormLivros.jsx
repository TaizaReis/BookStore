import { useState } from "react";
import LivroService from "../service/LivroService";

export default function FormLivros(){

    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);

    // Estrutura do livro com dados obrigatórios
    const livroData = {
        title: titulo,
        price: parseFloat(preco),
        // imagem: "thumbnail_Eu_Robo_72921aa286.webp",
    };

    // Chama o serviço para cadastrar o livro
    const cadastrarLivro = (event) => {
        event.preventDefault();
        LivroService.inserirLivro(livroData).then(livro => {
                alert("Livro criado com sucesso!")
                console.log("Livro Cadastrado",livro);

                // Limpa os campos do formulário após o sucesso
                setTitulo("");
                setPreco(0);       
            })            
    } 
    return (
        <form onSubmit= {cadastrarLivro}>
            <label>Titulo:</label>
            <input 
                type="text" 
                name="titulo" 
                value={titulo} 
                onChange={(ev) => setTitulo(ev.target.value)} 
            />
            <br />

            <label>Preço:</label>
            <input 
                type="number" 
                name="preco" 
                value={preco} 
                onChange={(ev) => setPreco(ev.target.value)} />
            <br />
            <input type="submit" value="Salvar"/>
        </form>
    )
}