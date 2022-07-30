import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


function Sessao(filme) {
    return (<>
    <div className="data">{filme.dia}-{filme.data}</div>
    <div className="ajuste">
       {filme.showtimes.map( hora =>
       { 

        return (
            <Link to={`/assento/${hora.id}`}>
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
			setItems(resposta.data.days);
		});
	}, []);


        
        return ( <>
              <div className="baixotopo">
              Selecione o horário
              </div>
                <div className="sessao">
                    {items.map((sessao, index) => <Sessao key={index} dia={sessao.weekday} data={sessao.date} showtimes={sessao.showtimes} />)}
    
                </div>
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