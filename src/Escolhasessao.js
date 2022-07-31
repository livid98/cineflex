import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Rodape from "./Rodape";


function Sessao(filme) {
    return (<>
    <div className="data">{filme.dia}-{filme.data}</div>
    <div className="ajuste">
       {filme.showtimes.map( hora =>
       { 

        return (
            <Link to={`/assentos/${hora.id}`}>
                <div className="hora">
                 {hora.name}
                </div>
            </Link>

        )

       } 
       )}
 

    </div>
    </> 
    )
}

 function  Sessoes() {
	const [items, setItems] = useState([]);
  
    const {idFilme} = useParams();
	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);
         
        
        return ( <> 
                <>
              <div className="baixotopo">
              Selecione o horário
              </div>
                <div className="sessao">
                    {items.days?.map((sessao, index) => <Sessao key={index} dia={sessao.weekday} data={sessao.date} showtimes={sessao.showtimes} />)}
    
                </div>
                </>
                <Rodape imag={items.posterURL} titulo={items.title} hora=""/>
                </>
                
        )
    
}

 

export default function Escolhasessao() {
    return (
        <>
            <Sessoes />
        </>
    )
}