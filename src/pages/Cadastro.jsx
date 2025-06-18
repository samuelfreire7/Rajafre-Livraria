import './Cadastro.css';
import gmail1 from '../assets/images/gmail-1.png'
import facebook1 from '../assets/images/facebook-1.png'






import "./Cadastro.css"

export default function Cadastro() {
    return (
        <section id="cad">
            <form className='form-cad'>
                <div className="formulario">
                    <h1 className='h1-cad'>Crie sua conta</h1>
                    <p>Já possui uma conta? Entre <a className='aqui-cad' href="">aqui</a>.</p>
                    <label for="email">Email*</label>
                    <input className='input-cad' type="email" placeholder="Insira seu email" id="email" name="email" required></input>

                    <button type="submit" className="criar-conta">Criar Conta</button>
                    <div className="outras-formas-de-se-cadastrar">
                        <p>Ou faça login com</p>
                        <a href="#"><img src={gmail1} alt="Login com Gmail" /></a>
                        <a href="#"><img src={facebook1} alt="Login com Facebook" /></a>
                    </div>
                </div>
            </form>
        </section>
    )
}