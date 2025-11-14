// aqui importamos os arquivos
import Header from "./components/Header";
import Banner from "./components/Banner";
import Dicas from "./components/Dicas"
import Lancamentos from "./components/Lancamentos";

//Arquivo principal

//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <Dicas/>
    <Lancamentos/>
    </>
  )
}
export default App