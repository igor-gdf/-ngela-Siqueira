import React from 'react';
import { BsPhone } from "react-icons/bs";


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
              <img src="multiicons.svg" alt="" />
              <h3>receita para o seu sucesso</h3>
            </div>
            <div>
              <h1>Tenha o segredo para<br/> o seu sucesso</h1>
              <p className='body-gray'>Apresento a vocês o curso Maratona do Currículo Ímã,<br/> que vai transformar sua abordagem.</p>
            </div>
            <div className='org-2'>
              <button className='btn-2'> Saber mais </button>
              <button className='btn-1'> <BsPhone /> Fale conosco </button>
            </div>
          </div>
          <img src="Rectangle.png" alt="imagem do seminario da Angêla" />
        </section>

        <section>
          <div className='org-1'>

          </div>
          <img src="mockup.png" alt="imagem modelo de celular " />
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
