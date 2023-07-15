import React from "react";
import './portfolio.css'
import IMG1 from '../../../src/assets/portfolio1.webp'
import IMG2 from '../../../src/assets/portfolio2.webp'
import IMG3 from '../../../src/assets/portfolio3.webp'
import IMG4 from '../../../src/assets/portfolio4.webp'
import IMG5 from '../../../src/assets/portfolio5.webp'
import IMG6 from '../../../src/assets/portfolio6.webp'


const data = [
  // {
  //   id: 1, 
  //   image: IMG1,
  //   title: 'Crypto Exchange Website',
  //   github: 'https://github.com/youngicthub',
  //   demo: 'https://dribbble.com/shots/21516271-Crypto-Exchange-Website',
  // },

  // {
  //   id: 2, 
  //   image: IMG2,
  //   title: 'Some [W]ork [I]n [P]rogress from Hypercal Website',
  //   github: 'https://github.com/youngicthub',
  //   demo: 'https://dribbble.com/shots/21513760--Some-W-ork-I-n-P-rogress',
  // },
  
  // {
  //   id: 3, 
  //   image: IMG3,
  //   title: 'SCreative Startup Agency / Website',
  //   github: 'https://github.com/youngicthub',
  //   demo: 'https://dribbble.com/shots/21515366-SaaS-Pricing-Page-Design',
  // },

  {
    id: 4, 
    image: IMG4,
    title: 'SaaS Pricing Page Design',
    github: 'https://github.com/youngicthub',
    demo: 'https://dribbble.com/shots/21488751-Creative-Startup-Agency-Website',
  },

  {
    id: 5, 
    image: IMG5,
    title: 'Orion UI kit – data visualization and charts templates for Figma',
    github: 'https://github.com/youngicthub',
    demo: 'https://dribbble.com/shots/20894858-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma',
  },
  {
    id: 6, 
    image: IMG6,
    title: 'Some [W]ork [I]n [P]rogress from Hypercal Website',
    github: 'https://github.com/youngicthub',
    demo: 'https://dribbble.com/shots/21513760--Some-W-ork-I-n-P-rogress',
  },

  
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works/Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolioContainer">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="portfolioItems">
          <div className="portfolioItemsImage">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>

          <div className="portfolioItmesLinks">
            <a href={github} className="btn" target="_blank" rel="noreferrer">  Github </a>
            <a href={demo} className="btn btn-primary" target="_blank"> Live Demo </a>
          </div>

        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio;