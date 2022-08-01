
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form({ ids, setIds,titulo,dia,hora,data}){
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const navigate = useNavigate();
    function Escrevaformulario(e){
        e.preventDefault();

        const data = {
            ids,
            name,
            cpf,
            titulo,
            dia,
            hora,
            data
        }
         if(ids.length===0){
            alert("escolha os lugares")
         }else{
        const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', data);
        promise.then(() => navigate('/sucesso'));
         }
    }

    return (
        <div className="formulario">
            <form onSubmit={Escrevaformulario}>
                <div>
                    <span>Nome do comprador:</span>
                    <input type='text' placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} required/>
                </div>
                <div>
                    <span>CPF do comprador:</span>
                    <input type='number' placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value={cpf} required/>
                </div>
                <button type='submit'>Reservar assento(s)</button>
            </form>
        </div>
    )
}

