//titulo recebe o nome do serviço.
//descricao recebe a explicação do serviço.

function Card({ titulo, descricao }) {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    );
}

function Cards() {
    return (
        <section className="servicos" id="servicos">
            <h2>Nossos Serviços</h2>

            <p className="descricao-servicos">
                Conheça as soluções que oferecemos para transformar
                o seu negócio.
            </p>

            <div className="container-cards">

                <Card
                    titulo="Desenvolvimento Web"
                    descricao="Criamos sites e plataformas digitais modernas, funcionais e responsivas."
                />

                <Card
                    titulo="Desenvolvimento de Aplicativos"
                    descricao="Desenvolvemos aplicativos que facilitam a conexão entre empresas e clientes."
                />

                <Card
                    titulo="Consultoria em TI"
                    descricao="Oferecemos orientação tecnológica para melhorar processos e resultados."
                />

            </div>
        </section>
    );
}

export default Cards;


//MODELO 01
// function Cards() {
//     return (
//         <section className="servicos" id="servicos">

//             <h2>Nossos Serviços</h2>

//             <p className="descricao-servicos">
//                 Conheça as soluções que oferecemos para transformar
//                 o seu negócio.
//             </p>

//             <div className="container-cards">

//                 <div className="card">
//                     <h3>Desenvolvimento Web</h3>
//                     <p>
//                         Criamos sites e plataformas digitais
//                         modernas, funcionais e responsivas.
//                     </p>
//                 </div>

//                 <div className="card">
//                     <h3>Desenvolvimento de Aplicativos</h3>
//                     <p>
//                         Desenvolvemos aplicativos que facilitam
//                         a conexão entre empresas e clientes.
//                     </p>
//                 </div>

//                 <div className="card">
//                     <h3>Consultoria em TI</h3>
//                     <p>
//                         Oferecemos orientação tecnológica
//                         para melhorar processos e resultados.
//                     </p>
//                 </div>

//             </div>

//         </section>
//     );
// }

// export default Cards;
//Cards() é um componente independente.

//section representa a área de serviços.

//container-cards agrupa os três cartões.

//Cada div className="card" representa um cartão individual.

//h3 apresenta o nome do serviço.

//p apresenta sua descrição.