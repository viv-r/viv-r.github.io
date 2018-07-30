import React from 'react'
import './card.css'
import pdf_icon from '../images/pdf-icon.png'
import github_icon from '../images/github-icon.png'
import outlink_icon from '../images/outlink-icon.png'

const icon_map = {
    github: github_icon,
    pdf: pdf_icon
}

const ProjectCard = ({ image, url, description, title, links }) => (
    <div className='card'>
        <div className='card-content'>
            <a href={url} className='title'> <h3> {title} </h3> </a>
            <div className='description' dangerouslySetInnerHTML={{ __html: description }} />
            <div className='links'>
                {
                    links.map(({ icon, link, text }) => (
                        <a href={link} key={link} className='button'>
                            <img className='icon' src={icon_map[icon]} />
                            {text}
                        </a>
                    ))
                }
            </div>
        </div >
        <a className='card-image' href={url}>
            <img src={image} className='image' />
            <img className='icon outlink' src={outlink_icon} />
        </a>
    </div >
)

export default ProjectCard