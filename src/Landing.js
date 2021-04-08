import React from 'react'
import Header from './Components/Header/header'

export default function Landing() {
  return (
    <div className="app-wrapper">
      <Header />
      <style jsx global>{`
        .app-wrapper {
          font-family: 'Roboto Mono',
           
          font-size: 14px;
          --brand-color: #252525;
        }
        a {
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
        .jumbo-bg {
          background: transparent;
          background-image: url(https://bootstrapmade.com/demo/themes/eStartup/img/hero-bg.png);
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: 100%;
        }
        @media (min-width: 1024px) {
          .jumbo-bg {
            background-attachment: fixed;
          }
        }
      `}</style>
    </div>
  )
}

