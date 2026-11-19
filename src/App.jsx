
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />

            <Home />

            <Footer />
        </div>
    );
}

export default App;


//import Home from "./pages/Home"; 
// Isso importa o componente que acabamos de criar.

//<Home />
//Isso faz com que o React exiba o conteúdo da página inicial 
// logo abaixo do cabeçalho.