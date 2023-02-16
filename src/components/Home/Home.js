import React from 'react'
import "./Home.css";
import hero from "../../assets/hero.jpeg"
import {Social} from "./Social"
import { Data } from './Data';
import ScrollDown from './ScrollDown';

export const Home = () => {
  return (
    
    <section className='home section' id="home">

      <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
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

            < Data />
          </div>
          <ScrollDown />
      </div>
    </section>

  )
}

