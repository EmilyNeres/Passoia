// hooks são funçoes especiais do react;
//useState controla os estados de algo na interface
import {useState} from "react";

//importe das imagens
import lip_red from "../../assets/lip_red.png";
import lip_blue from "../../assets/lip_blue.png";
import lip_brown from "../../assets/lip_brown.png";
import lip_nude from "../../assets/lip_nude.png"


function Lancamentos (){
    //estado inicial
    //cor a variavel inicial, setCor a função atualizadora
    const [cor, setCor]=useState(lip_red);
    //dentro do return inserimos as tags antes do return inserimos a logica
    return(
        <section>
            <h2>APROVEITE OS LANÇAMENTOS</h2>
            <img src={cor} alt="modelo usando batom" />

            <button onClick={()=>setCor(lip_blue)}>Azul</button>
            


        </section>
    )
}

export default Lancamentos;