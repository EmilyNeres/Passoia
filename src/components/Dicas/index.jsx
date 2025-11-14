import "./dicas.scss"
import Labios from "../../assets/labios.png"
import Olhos from "../../assets/olhos.png"
import Rosto from "../../assets/rosto.png"
import Tendencia from "../../assets/tendencia.png"


function Dicas(){
    return(
        <section>

        <h2>LOOKS E DICAS DE MAQUIAGEM</h2>

        <div className="categorias-make">
            <a href=""><img src={Labios} alt="" /></a>
            <a href=""><img src={Olhos} alt="" /></a>
            <a href=""><img src={Rosto} alt="" /></a>
            <a href=""><img src={Tendencia} alt="" /></a>


        </div>
       </section>
    )
}
export default Dicas