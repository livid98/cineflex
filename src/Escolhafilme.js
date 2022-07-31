import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


function Filme(filme) {
    return (
        <Link to = {`/sessoes/${filme.id}`}>
            <img src={filme.imag} alt="" />
        </Link>
    )
}

 function Lista() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);



        return ( <>
                 <div className="baixotopo">
                 Selecione o filme
                 </div>
                <div className="filmes">
                    {items.map((filme) => <Filme imag={filme.posterURL} id={filme.id} />)}
    
                </div>
            
                </>
            
        )
    
}

 

export default function Escolhafilme() {
    return (
        <>
            <Lista />
        </>
    )
}