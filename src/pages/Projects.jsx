import React from 'react'
import project1 from '../assets/cryptomania.png'
import project2 from '../assets/News.png'
import project3 from '../assets/Khatabook.png'
import project4 from '../assets/WeatherAPI.png'
import project5 from '../assets/JS-Todo.png'
import project6 from '../assets/QR-Generator.png'
import project7 from '../assets/BMI.png'
import project8 from '../assets/AuthApp.png'
import project9 from '../assets/project9.png'
import project10 from '../assets/11.png'
import project11 from '../assets/12.png'

const Projects = () => {
  const project = [
    {Image: project11, Title: "INS Theatre", Description: 'Developed a full-stack theatre web app with a dynamic frontend and admin panel for content management.', Link: 'https://www.indravatinatyasamiti.com/'},
    {Image: project10, Title: "Sehat Ki Pathshala", Description: "Health website build on React and Designed with bootstrap", Link: 'https://sehat-ki-pathshala-ewcm.vercel.app/'},
    {Image: project1, Title: 'Cryptomania', Description: 'Build on Redux toolkit, MaterialUI for UI, integrated trending crypto API using axios.', Link: 'https://cryptomania-iota.vercel.app/'},
    {Image: project8, Title: 'Authentication App', Description: 'Build on Redux Toolkit, here user can login and register, without doing so, he will unable to reach Home Page.', Link: 'https://authentication-app-ashen-delta.vercel.app/register'},
    {Image: project2, Title: 'News', Description: 'Build on React.js, using Bootstrap for UI design, intergrated news api using axios.', Link: 'https://news-app-six-sable.vercel.app/'},
    {Image: project3, Title: 'KhataBook', Description: 'Build on React.js, using Bootstrap for UI design, applying CRUD functionality.', Link: 'https://khatabook-hazel.vercel.app/'},
    {Image: project4, Title: 'Weather App', Description: 'Build using JavaScript, integrated Weather API using fetch method to fetch anywhere weather data.', Link: 'https://weather-app-psi-sable.vercel.app/'},
    {Image: project5, Title: 'JS Todo', Description: 'Build on JavaScript, here we can save todos and delete todos.', Link: 'https://js-todos.vercel.app/'},
    {Image: project6, Title: 'QR Generator', Description: 'Build on JavaScript, intergrated QR api using fetch method to generate QR for entered URL or text.', Link: 'https://qr-generator-one-gamma.vercel.app/'},
    {Image: project7, Title: 'BMI Calculator', Description: 'Build on JavaScript, here we can calculated our BMI that shows us that we are either healthy, overweight, undeweight or obese.', Link: 'https://bmi-calculator-seven-psi.vercel.app/'},
    {Image: project9, Title: 'My Portfolio', Description: 'My personal portfolio build on React, HTML & CSS'}
  ]
  return (
    <section id='projects' className="project-section">
      <h3 className='mt-4'>MY <span>PROJECTS</span></h3>
      <div className="projects">
      {project.map((item, index) => 
          <div className="box1" key={index}>
            <img src={item.Image} alt="" />
            <div className="layer">
              <h4>{item.Title}</h4>
              <p>{item.Description}</p>
              <a href={item.Link} target='#'><i className='bx bx-link-external'></i></a>
            </div>
          </div>
      )}
      </div>
    </section>
  )
}

export default Projects


