import axios from "axios";

const BASE_URL = "http://localhost:1337/api/books";


async function listarLivros() {
    const response = await axios.get(BASE_URL);
    return response.data.data;
}

async function inserirLivro(livro) {
    const response = await axios.post(BASE_URL, {
        data: livro  // Envia os dados do livro dentro da chave 'data'
    });
    return response.data.data;
}

async function buscarLivro(id) {
    const response = await axios.get(BASE_URL+"/"+id);
    return response.data.data;
}

async function atualizarLivro(id, livro) {
    const response = await axios.put(BASE_URL+"/"+id, {
        data: livro 
    });
    return response.data.data;
}

export default {
    listarLivros,
    inserirLivro,
    buscarLivro,
    atualizarLivro
}
