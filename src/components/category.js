import React from "react"
import { Link } from "gatsby"
const Category = ({ category, posts }) => {
    posts = posts.filter(post => post.tags.includes(category) )
    return (
        <ul className='category'>
            <h2 id={category} className='category--name'>{ category }</h2>
            { posts.map(post => renderEntryPost(post)) }
        </ul>
    )
}
export default Category

const renderEntryPost = (post) => {
    return (
        <li className='category--item l-flex' key={post.id}>
            <Link to={post.path} className='category--link'>{post.title}</Link>
            <time className='category--entry-date'>{post.date}</time>
        </li>
    )
}
