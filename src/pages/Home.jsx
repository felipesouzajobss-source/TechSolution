
import Cards from "../components/Cards";
import TextosImagens from "../components/TextosImagens";

function Home() {
    return (
        <main>

            <section className="inicio" id="inicio">

                <h2>Transformando ideias em soluções tecnológicas</h2>

                <p>
                    A TechSolutions desenvolve soluções digitais
                    inovadoras para conectar pessoas, empresas
                    e oportunidades.
                </p>

                <a href="#servicos" className="botao-servicos">
                    Conheça nossos serviços
                </a>
            </section>

            <Cards />

            <TextosImagens />

        </main>
    );
}

export default Home;



// return = define o conteúdo que será exibido na página
//<main> representa o conteúdo principal do site.
//<section> cria uma seção específica da página.
//className="inicio" permite estilizar essa seção no CSS.
//id="inicio" permite que o link Início do menu leve até ela.
//<h2> define o título.
//<p> apresenta o texto.
//<button> cria um botão.