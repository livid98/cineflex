
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

 
function Assento({status,nome}) {
    
    if(status===true){
    return (
            <div className="cinza" >
              {nome}
            </div>
    
    )
}
if (status===false){
    return (
        <div className="amarelo">
          {nome}
        </div>

)
}
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
                    {items.seats?.map((assento, index) => <Assento nome={assento.name} status={assento.isAvailable} key={index}/>)}
    
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