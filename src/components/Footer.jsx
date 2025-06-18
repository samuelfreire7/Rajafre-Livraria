import './Footer.css';
import logoRajafreFooter from "../assets/images/livraria-rajafre.png"
import logoFacebookFooter from "../assets/images/logoFacebook.png"
import logoInstagramFooter from "../assets/images/logoInstagram.png"
import logoTwitterFooter from "../assets/images/logoTwitter.png"


export default function Footer() {
    return (
        <>
            <footer>

                <section className="sera">

                    <div className="logod">
                        <img className='img-rajafre' src={logoRajafreFooter} alt="" />

                        <div className="lorem">
                            <p>A cada página um fôlego de esperança para uma vida melhor.</p>
                        </div>

                        <div className="logos">
                            <a href=""><img src={logoFacebookFooter} alt="" /></a>
                            <a href=""><img src={logoInstagramFooter} alt="" /></a>
                            <a href=""><img src={logoTwitterFooter} alt="" /></a>
                        </div>
                    </div>

                    <div className="informaçao">
                        <h3>Informação</h3>
                        <p>Sobre Rajafre Livraria</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Seja Parceiro</p>
                        <p>Meus Pedidos</p>

                    </div>

                    <div className="categoria">
                        <h3 className="h3tit">Categorias</h3>
                        <p>Romance</p>
                        <p>Ação</p>
                        <p>Autoajuda</p>
                        <p>Investimentos</p>
                        <p>Terror</p>
                    </div>

                    <div className="contato">
                        <h3 className="h3tit">Contato</h3>
                        <p>Rua Minas Gerais, 1634 Jóquei Clube, Fortaleza -CE, 60440-205</p>
                        <p>(85) 99999-9999</p>
                    </div>

                    <div className="divFinal">
                        <hr className="linha-footer" />
                    </div>
                </section>
                <p className="p"> &copy; 2025 Rajafre Livraria</p>
            </footer>
        </>
    );
};