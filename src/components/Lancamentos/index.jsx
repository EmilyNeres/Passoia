import"./lancamentos.scss"

// hooks são funçoes especiais do react;
//useState controla os estados de algo na interface
import {useState} from "react";

//importe das imagens
import lip_red from "../../assets/lip_red.png";
import lip_blue from "../../assets/lip_blue.png";
import lip_brown from "../../assets/lip_brown.png";
import lip_nude from "../../assets/lip_nude.png"
import lipstick_one from "../../assets/lipstick_one.png"
import lipstick_two from "../../assets/lipstick_two.png"
import lipstick_three from "../../assets/lipstick_three.png"
import stars from "../../assets/stars.png"






function Lancamentos (){
    //estado inicial
    //cor a variavel inicial, setCor a função atualizadora
    const [cor, setCor]=useState(lip_red);
    //dentro do return inserimos as tags antes do return inserimos a logica
    return(
        <section className="lancamentos">
            <h2>APROVEITE OS LANÇAMENTOS</h2>

            <div  className="wrapper">

                <div className="lipstick">
                   <a href=""><img src={lipstick_one} alt="" /></a>
                   <a href=""><img src={lipstick_two} alt="" /></a>
                   <a href=""><img src={lipstick_three} alt="" /></a>
                </div>

                <img className="img_cor" src={cor} alt="modelo usando batom" />

                <div className="description">

                    <img className="img_star" src={stars} alt="cinco estrelas douradas" />
                    <h3>Matte Premium</h3>
                    <p>Cores disponiveis</p>
                    <div className="colors">
                        <button className="blue" onClick={()=>setCor(lip_blue)}></button>
                        <button className="red" onClick={()=>setCor(lip_red)}></button>
                        <button className="brown" onClick={()=>setCor(lip_brown)}></button>
                        <button className="nude" onClick={()=>setCor(lip_nude)}></button>
                        </div>
                    <h4>Descrição</h4>
                    <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
                </div>
            </div>
            


        </section>
    )
}

export default Lancamentos;