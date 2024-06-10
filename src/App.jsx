import React from 'react';

function App() {
  return (
    <>
      {/* header begining */}
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
    </>
  )
}
export default App
