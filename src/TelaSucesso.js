
import { Link, useLocation } from "react-router-dom";
export default function TelaSucesso() {
    const location = useLocation();
    const reservationInfo = location.state.tickets;
    console.log(reservationInfo)
    return (
            <>
            <div className="baixotopo2">
            Pedido feito
            com sucesso!
              </div>
              <div className="filmesucesso">
              <h1>Filme e sessão</h1>
              <p>{reservationInfo.titulo}</p>
              <h2>{reservationInfo.data} {reservationInfo.hora}</h2>
              </div>
               <div className="assentosucesso">
               <h1>Ingressos</h1>
                {reservationInfo.ids.map((seat, index) => (seat.length === 1 ? <div key={index}><span>Assento 0{seat}</span></div> : <div key={index}><span>Assento {seat}</span></div>))}
               </div>
               <div className="infousuario">
                <h1>Comprador</h1>
               <div><span>Nome: {reservationInfo.name}</span></div>
                <div><span>CPF: {reservationInfo.cpf}</span></div>
               </div>
               <Link to='/'>
                <button>Voltar para Home</button>
               </Link>
              </>
        
  );
        

}