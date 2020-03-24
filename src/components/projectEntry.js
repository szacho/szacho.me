import React from "react"
import { Link } from "gatsby"
import BackgroundImage from './backgroundImage'

const ProjectEntry = ({ project }) => (
    <BackgroundImage className='blog-entry' tagName='li' fileName={project.frontmatter.image}>
        <div className="l-flex" style={{justifyContent: 'space-between', width: '100%'}}>
            <time className='blog-entry--date' itemProp='datePublished'>
                {project.frontmatter.date}
            </time>
            <ul className='blog-entry--categories l-flex'>
                { project.frontmatter.tags.map(tag => renderTag(tag)) }
            </ul>
        </div>
        <h3 className='blog-entry--title'>
            <Link to={ project.frontmatter.path } className='blog-entry--link'>{ project.frontmatter.title }</Link>
        </h3>
        <p className='blog-entry--excerpt'>
            {project.frontmatter.short}
        </p>
        <Link to={ project.frontmatter.path } className='blog-entry--readmore'>Read more &raquo;</Link>
    </BackgroundImage>
)
export default ProjectEntry

const renderTag = (tag) => {
    let url = `/tags/#${tag}`
    return (
        <li className='category--tag' key={tag}>
            <Link to={url} className='category--tag-link'>{ tag }</Link>
        </li>
    )
}
