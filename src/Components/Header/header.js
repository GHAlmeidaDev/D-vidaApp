import React from 'react'
import { Link } from 'react-router-dom';
import Typerwriter from "typewriter-effect";


const Header = () => {
  return (
    <header>
      <div className="intro-logo jumbo-bg">
        <h1>
          <Typerwriter
            onInit={(typewriter) => {
              typewriter.typeString("Controle de Dívidas").pauseFor(2000).start();
            }}
          />
        </h1>
       

       
       
      
        <img
          src="https://bootstrapmade.com/demo/themes/eStartup/img/hero-img.png"
          className=""
          alt=""
        />
        <div className="intro-button">
          
          <Link to="/dashboard" className="dashboard">
             Iniciar
          </Link>
        </div>
        
      </div>

      <style jsx>{`
        header {
          margin-bottom: 1rem;
          backgroundColor:' #fffdd0';
          font-family: 'Roboto Mono';
          font-size: '1.8rem'
        }
        
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
          font-size: 1.8em;
          font-weight: 900;
          font-family: 'Roboto Mono';
          color: var(--brand-color);
        }
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: var(--gray-color-1);
          margin-bottom: 3em;
        }

    
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: var(--brand-color);
          border: 1.8px solid var(--brand-color);
          background: fffdd0;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: var(--brand-color);
          color: #fffdd0;
        }

      `}</style>
    </header>
  )
}

export default Header
