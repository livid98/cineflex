
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Assento(assento) {
    return (
            <div className='assento'>
              {assento.nome}
              {assento.status}
            </div>
    
    )
}

 function Assentos() {
	const [items, setItems] = useState([]);
    const {idSessao} = useParams();
	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {
			setItems(resposta.data);
		});
	}, []);



        return ( <>
                 <div className="baixotopo">
                 Selecione o(s) assentos
                 </div>
                <div className="assentos">
                    {items.seats?.map((assento) => <Assento nome={assento.name} status={assento.isAvailable} />)}
    
                </div>

                </>
            
        )
    
}

 

export default function Escolhaassento() {
    return (
        <>
            <Assentos />
        </>
    )
}