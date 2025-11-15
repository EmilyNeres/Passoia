import "./footer.scss"
import Mastercard from "../../assets/mastercard.png"
import Visa from "../../assets/visa.png"
import Pix from "../../assets/pix.png"
import Boleto from "../../assets/boleto.png"
import Instagram from "../../assets/instagram.png"
import Facebook from "../../assets/facebook.png"
import Youtube from "../../assets/youtube.png"
import Twitter from "../../assets/twitter.png"

function Footer(){
    return(

    <section className="footer">
        <div className="service">
            <h4>ATENDIMENTO</h4>
            <a href="">Fale Conosco</a>
            <a href="">Perguntas Frequentes</a>
            <a href="">Meus Pedidos</a>
            <a href="">Nossas Lojas</a>
        </div>

        <div className="payments">
            <h4>FORMAS DE PAGAMENTO</h4>
            <div className="payments-icons">
                <img src={Mastercard} alt="logo mastercard" />
                <img src={Visa} alt="logo visa" />
                <img src={Pix} alt="logo pix" />
                <img src={Boleto} alt="logo de boleto" />
            </div>

        </div>

        <div className="social">
            <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
            <a href="#"><img src={Instagram} alt="logo do instagrm" /></a>
            <a href=""><img src={Facebook} alt="Logo do Facebook" /></a>
            <a href=""><img src={Youtube} alt="Logo do Youtube" /></a>
            <a href=""><img src={Twitter} alt="Logo do Twitter" /></a>

        </div>
    </section>
    )
}
export default Footer