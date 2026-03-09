import React, { useState } from 'react'
import html from '../assets/HTML5.png'
import css from '../assets/csslogo.png'
import js from '../assets/js.png'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import nodejs from '../assets/nodejs.svg'
import mongodb from '../assets/mongodb.svg'
import express from '../assets/express.webp'
import bootstrap from '../assets/bootstrap.png'
import materialUI from '../assets/MaterialUI.svg'
import tailwind from '../assets/Tailwind.png'
import typescript from '../assets/typescript.png'
import mysql from '../assets/mySql.png'

const Skills = () => {

  const [skill, setSkill] = useState([
    {name: "HTML5", image: html},
    {name: "CSS3", image: css},
    {name: "Javascript", image: js},
    {name: "React.JS", image: react},
    {name: "Redux.JS", image: redux},
    {name: "Typescript", image: typescript},
    {name: "Node.JS", image: nodejs},
    {name: "Expess.JS", image: express},
    {name: "MongoDB", image: mongodb},
    {name: "MySQL", image: mysql},
    {name: "Material UI", image: materialUI},
    {name: "Bootstrap", image: bootstrap},
    {name: "Tailwind CSS", image: tailwind},
  ])

  return (
    <section className="skill-section py-5" id='skills'>
        <h3 className='mt-4'>MY <span>SKILLS</span></h3>
        <div className="skills d-flex flex-wrap align-items-center justify-content-center">
          {skill.map((item, index) => 
            <div className="box" key={index}>
            <img src={item.image} alt="" />
            <h4>{item.name}</h4>
          </div>
          )}
        </div>
      </section>
  )
}

export default Skills