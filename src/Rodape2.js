export default function Rodape2({imag,titulo,hora,dia}){
    return (
        <div className="rodape2">

            <div className="filmerodape">
            <img src={imag} alt="" />
            </div>
            <h3><div>{titulo}</div><div>{dia} - {hora}</div></h3>
        </div>

    )


}