import React from 'react'
import "./Home.css";
import hero from "../../assets/hero.jpeg"

export const Home = () => {
  return (
    
    <section className='home section' id="home">

      <div className="content">

        <div className="hero-img-wrap">

          <div className="hero-img-container">
            <img src={hero} alt="" className="hero-img" />
          </div>

          <div id="hero-img-shadow-1" className="hero-img-shadow-wrap">
            <div className="hero-img-shadow"></div>
          </div>

          <div
            id="hero-img-shadow-2"
            className="hero-img-shadow-wrap hero-img-shadow-wrap--intro"
          >
            <div className="hero-img-shadow"></div>
          </div>

        </div>

        <div className="hero-description">

          <h3>hi,</h3>
          <h1>Deepak Krishnan E</h1>
          <h2>FrontEnd Web Developer | Software Engineer</h2>

        </div>

      </div>
    </section>

  )
}

