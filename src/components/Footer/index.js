import './Footer.css';

const Footer = () => {
    return (
        <footer id = 'About_us' className="Rodape">
            <p>
                © 2025 João Gabriel. Todos os direitos reservados.<br/>
                Este site foi desenvolvido com foco em qualidade,<br/>
                acessibilidade e performance.
                Entre em contato para parcerias,<br/>
                sugestões ou apenas para dizer oi! <br/>
                Siga-nos nas redes sociais e fique por dentro das novidades.
            </p>
            <div className="Rodape__links">
                <a href="#" target="fecebook">
                    <img src="/imagem/facebook.png" alt="fecebook"/> facebook 
                </a>
                <a href="#">
                    <img src="/imagem/instagram.png" alt="instagram"/> instagram
                </a>
                <a href="#">
                    <img src="/imagem/linkedin.png" alt="linkedin"/> linkedin
                </a>
                <a href="#">
                    <img src="/imagem/pinterest.png" alt="pinterest"/> pinterest
                </a>
                <a href="#">
                    <img src="/imagem/whatsapp.png" alt="whatsapp"/> whatsapp
                </a>
                <a href="#">
                    <img src="/imagem/phone.png" alt="phone"/> phone
                </a>
                
            </div>
        </footer>
    )

}

export default Footer