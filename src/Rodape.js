export default function Rodape(baixo) {
    return (
        <div className="rodape">

            <div className="filmerodape">
            <img src={baixo.imag} alt="" />
            </div>
            <h3>{baixo.titulo} {baixo.hora}</h3>
        </div>

    )

}