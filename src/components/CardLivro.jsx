import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


export default function CardLivro ({ livro }) {
    console.log(livro)
    const navigate = useNavigate();

    // // Construindo a URL da imagem 
    // const imageUrl = livro.coverImage ? `${process.env.REACT_APP_API_URL}${livro.coverImage.formats.thumbnail.url}` : null;

    const editarProduto = () => {
        navigate(`/edit/${livro.id}`)
    }
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16" onClick={editarProduto}>
            <div className="w3-card">
                <div className="w3-container w3-center">
                    {/* {imageUrl && <img src={imageUrl} style={{ width: "70%" }} alt={livro.title} />}   */}
                    <h5>{livro.title}</h5>
                    <h3 className="w3-blue">
                        {livro.price.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}
                    </h3>
                </div>
            </div>
        </div>
    )
}


// Definindo os tipos das props
CardLivro.propTypes = {
    livro: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        coverImage: PropTypes.shape({
            formats: PropTypes.shape({
                thumbnail: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }),
            }),
        }),
    }).isRequired,
};
