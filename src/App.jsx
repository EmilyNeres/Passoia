// aqui importamos os arquivos
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categorias from "./components/Categorias"
import Lancamentos from "./components/Lancamentos";
import Novidades from "./components/Novidades"
import Footer from "./components/Footer"


//Arquivo principal

//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <Categorias/>
    <Lancamentos/>
     <Novidades/>
     <Footer/>
    </>
  )
}
export default App