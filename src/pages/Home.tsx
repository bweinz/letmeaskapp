import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/delete.svg';
import { Button } from '../components/Button'

import '../styles/auth.scss'

//webpack (snopack, vite, ...)

//Module Bundler -> todas as importações como a illustration ele vê que é um svg e decide qual formato ele vai transformar a imagem, pega a extensão do arquivo e tem uma pré definição para ativar dentro do codigo

export function Home() {
    return ( 
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie sala de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie uma sala com o Google
                    </button>
                    <div className="separator"> ou entre em uma sala</div>
                    <form>
                        <input
                        type="text" 
                        placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}