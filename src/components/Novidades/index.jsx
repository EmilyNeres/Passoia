
import "./novidades.scss"
import novidades from "../../assets/bannerNovidades.png"

function Novidades (){
    return(
        <section className="novidades">
        <h2>NOVIDADADES PARA VOCÊ</h2>
        <img src={novidades} alt="" />
        </section>
    )

}
export default Novidades