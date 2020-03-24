import React from "react"
import { Link } from "gatsby"
import BackgroundImage from './backgroundImage'

const Entry = ({ post }) => (
<BackgroundImage className='blog-entry' tagName='li' fileName={post.frontmatter.image}>
    <div className="l-flex" style={{justifyContent: 'space-between', width: '100%'}}>
        <time className='blog-entry--date' itemProp='datePublished'>
            {post.frontmatter.date}
        </time>
        <ul className='blog-entry--categories l-flex'>
            { post.frontmatter.tags.map(tag => renderTag(tag)) }
        </ul>
    </div>
    <h3 className='blog-entry--title'>
        <Link to={ post.frontmatter.path } className='blog-entry--link'>{ post.frontmatter.title }</Link>
    </h3>
    <p className='blog-entry--excerpt'>
        {post.frontmatter.short}&hellip;
    </p>
    <Link to={ post.frontmatter.path } className='blog-entry--readmore'>Read more &raquo;</Link>
</BackgroundImage>
)
export default Entry

const renderTag = (tag) => {
    let url = `/tags/#${tag}`
    return (
        <li className='category--tag' key={tag}>
            <Link to={url} className='category--tag-link'>{ tag }</Link>
        </li>
    )
}
