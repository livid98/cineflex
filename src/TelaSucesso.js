import { Link, useNavigate } from "react-router-dom";
export default function TelaSucesso() {
    const navigate = useNavigate();
    console.log(navigate);
    return (
        <>
            <div className="baixotopo2">
            Pedido feito
            com sucesso!
              </div>
        </>
    )
}