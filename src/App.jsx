import React from 'react';
import { BsPhone } from "react-icons/bs";
import { FaCheck, FaSquareXTwitter, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa6";

function App() {
  return (
    <>
      {/* header start */}
      <header>
        <img src="ANGELA-LOGO-1024x1024.svg" alt="logo da pagina" />
        <div className='header-container'>
          <nav className='none'>
            <a href="#">Vantagens</a>
            <a href="#">Capacitação</a>
            <a href="#">Lorem</a>
          </nav>
          <button className='btn-1 none'> Contato </button>
          <button className='btn-2'> Adquirir curso </button>
        </div>
      </header>
      {/* header end */}

      {/* landing start */}
      <div className='landing'>

        <section>
          <div className='org-1'>
            <div className='org-2'>
              <img src="multiicons.svg" alt="multiplos icons sobrepostos" />
              <p className='bold-bold'>receita para o seu sucesso</p>
            </div>
            <div>
              <h1>Tenha o segredo para<br /> o seu sucesso</h1>
              <p className='body-gray'>Apresento a vocês o curso Maratona do Currículo Ímã,<br /> que vai transformar sua abordagem.</p>
            </div>
            <div className='org-2 column width'>
              <button className='btn-2 width'> Saber mais </button>
              <button className='btn-1 width'> <BsPhone /> Fale conosco </button>
            </div>
          </div>
          <img className='container-img' src="Rectangle.svg" alt="imagem do seminario da Angêla" />
        </section>

        <section>
          <div className='org-1'>
            <div>
              <div className='org-2'>
                <img src="paper.svg" alt="immagem da palestra" />
                <p className='bold-bold'>potencialize seu curriculo</p>
              </div>
              <h2>Maratona do currículo ímã</h2>
              <p className='body-gray'>Apresento a vocês o curso Maratona do Currículo Ímã,<br /> que vai transformar sua abordagem.</p>
            </div>
            <div className='bullets'>
              <p className='body-regular'><span className='circle-1'><FaCheck /></span>Aumente suas chances de contratação.</p>
              <p className='body-regular'><span className='circle-1'><FaCheck /></span>Crie um currículo irresistível para recrutadores.</p>
              <p className='body-regular'><span className='circle-1'><FaCheck /></span>Destaque-se no mercado competitivo.</p>
            </div>
            <button className='btn-2 width'> Garanta sua vaga <img src="button-asset.svg" alt="icon de melancia" /> </button>
          </div>
          <img className='container-img' src="mockup.svg" alt="imagem template de celular" />
        </section>

        <section>
          <div className='org-1'>
            <div className='org-2'>
              <img src="star.svg" alt="immagem da palestra" />
              <p className='bold-bold'>nossas vantagens</p>
            </div>
            <h2>Por que escolher a <br /> Maratona do currículo imã?</h2>
            <div className='center'>
              <img src="mockup-pc.svg" alt="template de notebook" />
            </div>
          </div>

          <div className='org-5'>
            <div className='org-4'>
              <span className='circle-2 body-blue'>1</span>
              <p className='.body-medium'>Tenha acesso vitalício ao curso!</p>
            </div>
            <div className='org-4'>
              <span className='circle-2 body-blue'>2</span>
              <p className='.body-medium'>Transforme sua carreira: desbloqueie novas<br /> oportunidades com nosso curso exclusivo.</p>
            </div>
            <div className='org-4'>
              <span className='circle-2 body-blue'>3</span>
              <p className='.body-medium'>Expertise acessível: adquira conhecimento de<br /> qualidade com nosso curso.</p>
            </div>
            <div className='org-4'>
              <img src="circle-star.svg" alt="circulo com estrela no meio" />
              <p className='.body-medium'>Conquiste o currículo perfeito: impressione<br /> recrutadores e garanta entrevistas!</p>
            </div>
            <button className='btn-2 width'> Garanta sua vaga <img src="button-asset.svg" alt="icon de melancia" /> </button>
          </div>
        </section>

        <section>
          <div className='org-1'>
            <div className='org-6'>
              <div className='org-2'>
                <img src="chat.svg" alt="immagem da palestra" />
                <p className='bold-bold'>depoimentos</p>
              </div>
              <h2>O que os nossos alunos dizem?</h2>
              <p className='body-gray'>Confira as experiências e histórias de sucesso de nossos <br /> alunos que transformaram suas carreiras com a Maratona do <br />Currículo Imã.</p>
            </div>
            <button className='btn-2 width'> Garanta sua vaga <img src="button-asset.svg" alt="icon de melancia" /> </button>
          </div>

          <div className='cards-container'>
           <video src="video1.mp4" controls preload="metadata"></video>
           <video src="video2.mp4" controls preload="metadata"></video>
           <video src="video3.mp4" controls preload="metadata"></video>
          </div>
        </section>
      </div>
      {/* landing end */}

      {/* footer start */}
      <footer>
        <img src="ANGELA-LOGO-1024x1024.svg" alt="logo da pagina" />
        <div className='org-2 svg'>
          <FaSquareXTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaFacebookF />
        </div>
        <p className='body-copyright'>© 2022 SmartBusiness. Todos os direitos reservados</p>
      </footer>
      {/* footer end */}
    </>
  )
}
export default App
