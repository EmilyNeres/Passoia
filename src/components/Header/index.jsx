import "./header.scss"
import logo from "../../assets/logo.png"

function Header(){
    return(
        <header>
            <img src={logo} alt="logo marca da pagina" />
           
            <ul>
                <a href="#"><li>LOOKS</li></a>
                <a href="#"><li>LANÇAMENTOS</li></a>
                <a href="#"><li>NOVIDADE</li></a>
            </ul>
        </header>
    )
}
export default Header
//   header - tag
// Header componente funcional -logica