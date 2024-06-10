import React from 'react';
import { BsPhone } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

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
              <h3>receita para o seu sucesso</h3>
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
          <img className='container-img' src="Rectangle.png" alt="imagem do seminario da Angêla" />
        </section>

        <section>
          <div className='org-1'>
            <div>
              <div className='org-2'>
                <img src="multiicons.svg" alt="" />
                <h3>potencialize seu curriculo</h3>
              </div>
              <h2>Maratona do currículo ímã</h2>
              <p className='body-gray'>Apresento a vocês o curso Maratona do Currículo Ímã,<br /> que vai transformar sua abordagem.</p>
            </div>
            <div className='bullets'>
              <p className='body-regular'><span className='circle'><FaCheck /></span>Aumente suas chances de contratação.</p>
              <p className='body-regular'><span className='circle'><FaCheck /></span>Crie um currículo irresistível para recrutadores.</p>
              <p className='body-regular'><span className='circle'><FaCheck /></span>Destaque-se no mercado competitivo.</p>
            </div>
            <button className='btn-2 width'> Garanta sua vaga <img src="button-asset.svg" alt="icon de melancia" /> </button>
          </div>
          <img className='container-img' src="mockup.png" alt="imagem template de celular" />
        </section>

        <section></section>
        <section></section>
      </div>
      {/* landing end */}

      {/* footer start */}
      <footer>

      </footer>
      {/* footer end */}
    </>
  )
}
export default App
