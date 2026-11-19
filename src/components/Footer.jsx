
function Footer() {
    return (
        <footer className="footer" id="contato">

            <div className="footer-conteudo">

                <div>
                    <h2>TechSolutions.</h2>

                    <p>
                        Transformando ideias em soluções
                        tecnológicas para o futuro.
                    </p>
                </div>

                <div>
                    <h3>Contato</h3>

                    <p>Email: contato@techsolutions.com.br</p>
                    <p>Telefone: (21) 99999-9999</p>
                </div>

                <div>
                    <h3>Navegação</h3>

                    <a href="#inicio">Início</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#sobre">Sobre</a>
                </div>

            </div>

            <div className="footer-final">
                <p>
                    © 2026 TechSolutions. Todos os direitos reservados.
                </p>
            </div>

        </footer>
    );
}

export default Footer;
