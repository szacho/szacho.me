import React from "react"
import { Link } from "gatsby"
const Entry = ({ post }) => (
    <li className='blog-entry l-flex'>
        <h3 className='blog-entry--title'>
            <Link to={ post.frontmatter.path } className='blog-entry--link'>{ post.frontmatter.title }</Link>
        </h3>
        <ul className='blog-entry--categories l-flex'>
            { post.frontmatter.tags.map(tag => renderTag(tag)) }
        </ul>
    </li>
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
