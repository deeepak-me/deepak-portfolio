import React from 'react'
import "./About.css";
import { Info } from './Info';

export const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">

          <div className="about__data">
            <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi voluptatem qui voluptate non dignissimos assumenda amet vel autem nulla cumque vitae beatae, inventore fuga facere harum sunt eveniet suscipit?</p>

            <Info />

            <a download="" href="" className="button button--flex">Download CV</a>
          </div>

        </div>
    </section>
  )
}

