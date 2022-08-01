
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Rodape2 from "./Rodape2";

 
function Assento({status,nome,Id}) {
   console.log(Id);
    const [cor,setCor] = useState("amarelo");
    const [cor2,setCor2] = useState("cinza");
    if(status===true){
    return (
            <div className={cor2} onClick={Mudacor}>
              {nome}
            </div>
    
    )
}
if (status===false){
    return (
        <div className={cor} onClick={()=> alert("Esse assento não está disponível")}>
          {nome}
        </div>

)
}
function Mudacor(){
    if (cor2==="cinza"){
        setCor2("azul")
    }
   else if (cor2==="azul"){
        setCor2("cinza")
    }
   
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

      console.log(items);

        return ( <>
                 <>
                 <div className="baixotopo">
                 Selecione o(s) assentos
                 </div>
                <div className="assentos">
                    {items.seats?.map((assento, index) => <Assento nome={assento.name} status={assento.isAvailable} key={index} Id={assento.id}/>)}
    
                </div>

                <div className='legenda'>
                    <div><div className='azul'></div>Selecionado</div>  <div><div className='cinza'></div>Disponível</div>  <div><div className='amarelo'></div>Indisponível</div> 
                </div>
                </>
                <Rodape2 imag={items.movie?.posterURL} titulo={items.movie?.title} hora={items.name} dia={items.day?.weekday}/>
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